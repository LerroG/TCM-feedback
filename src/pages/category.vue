<script setup lang="ts">
import { questions } from '@/questions'
import { QuestionResponse } from '@/types/questions.types'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const { locale, t } = useI18n()

const url = window.SETTINGS.api
const deviceName = window.SETTINGS.deviceName
const answersData = ref<QuestionResponse[]>([])
const selectedAnswers = ref<Record<string, string>>({})

const pushToAnswers = (question: QuestionResponse) => {
	selectedAnswers.value[question.Question] = question.Answer
	const existingAnswer = answersData.value.find(
		answer => answer.Question === question.Question
	)
	if (existingAnswer) {
		existingAnswer.Answer = question.Answer
	} else {
		answersData.value.push(question)
	}
}

const handleSubmit = () => {
	const data = answersData.value.map(answer => ({
		DeviceName: deviceName,
		Question: t(answer.Question),
		Answer: t(answer.Answer),
		Lang: answer.Lang
	}))

	const requests = data.map(item =>
		fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(item)
		}).then(response => response.json())
	)

	Promise.all(requests).then(() => {
		router.push('/thanks')
		// console.log('All responses:', results)
	})
	// .catch(error => {
	// 	console.error('Error in one or more requests:', error)
	// })
}
</script>

<template>
	<div class="category_wrapper">
		<div class="questions_wrapper">
			<div class="questions_container">
				<div
					:class="{'half_width': questions[route.params.categoryName as string].length > 1}"
					v-for="(item, idx) in questions[route.params.categoryName as string]"
					:key="idx"
				>
					<div class="question">
						{{ idx + 1 }}. {{ $t(`${item.question}`) }}
					</div>
					<div class="answers_container">
						<button
							v-for="(answer, idx) in item.answers"
							:key="idx"
							@click="
								pushToAnswers({
									Question: item.question,
									Answer: answer.name,
									Lang: locale
								})
							"
							class="answer_button"
							:style="{
								backgroundColor: answer.color,
								scale: selectedAnswers[item.question] === answer.name ? 1.2 : 1
							}"
						>
							{{ $t(`${answer.name}`) }}
						</button>
					</div>
				</div>
			</div>
		</div>
		<div class="submit_container">
			<button
				type="submit"
				@click="handleSubmit"
				class="submit_button"
				:disabled="answersData.length < questions[route.params.categoryName as string].length"
			>
				{{ $t('Send') }}
			</button>
		</div>
	</div>
</template>

<style scoped>
.category_wrapper {
	font-weight: bold;
	text-align: center;
	height: 100%;
}

.questions_wrapper {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 90%;
}

.questions_container {
	display: flex;
	justify-content: center;
	align-items: flex-start;
	gap: 1rem;
}

.half_width {
	width: 50%;
}

.question {
	font-size: 1.125rem;
	margin-bottom: 1rem;
}

.answers_container {
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	align-items: center;
}

.answer_button {
	padding-top: 0.5rem;
	padding-bottom: 0.5rem;
	padding-left: 1rem;
	padding-right: 1rem;
	border-radius: 0.375rem;
	min-width: 13rem;
	font-weight: 600;
	transition: all 0.3s ease;
}

.answer_button:active {
	opacity: 0.8;
}

.submit_container {
	height: 10%;
}

.submit_button {
	background-color: #0ea5e9;
	color: white;
	font-size: 1.25rem;
	padding-top: 0.5rem;
	padding-bottom: 0.5rem;
	padding-left: 1rem;
	padding-right: 1rem;
	border-radius: 0.375rem;
	transition: background-color 0.3s ease;
}

.submit_button:active {
	background-color: rgba(14, 165, 233, 0.9);
}

.submit_button:disabled {
	background-color: #cbd5e1;
}
</style>
