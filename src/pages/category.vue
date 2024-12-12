<script setup lang="ts">
import { mySetTimeout } from '@/lib/customTimeout'
import { questions } from '@/questions'
import { QuestionResponse } from '@/types/questions.types'
import { onMounted, onUnmounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const { locale, t } = useI18n()

let cancelTimer: () => void
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
	})
}

onMounted(() => {
	cancelTimer = mySetTimeout(() => {
		router.push('/')
	}, 60000)
})

onUnmounted(() => {
	// Отменяем таймер при размонтировании компонента
	if (cancelTimer) {
		cancelTimer()
	}
})
</script>

<template>
	<div class="category_wrapper">
		<div class="questions_wrapper">
			<div
				:class="{'half_width': questions[route.params.categoryName as string].length > 1}"
				v-for="(item, idx) in questions[route.params.categoryName as string]"
				:key="idx"
			>
				<div class="question">{{ idx + 1 }}. {{ $t(`${item.question}`) }}</div>
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
						:class="[
							'answer',
							answer.color,
							{
								selected: selectedAnswers[item.question] === answer.name,
								deselected: selectedAnswers[item.question] !== answer.name
							}
						]"
						:style="{ backgroundColor: answer.color }"
					>
						{{ $t(`${answer.name}`) }}
					</button>
				</div>
			</div>
		</div>
		<button
			type="submit"
			@click="handleSubmit"
			class="submit_button"
			:disabled="answersData.length < questions[route.params.categoryName as string].length"
		>
			{{ $t('Send') }}
		</button>
	</div>
</template>

<style scoped>
.category_wrapper {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-weight: bold;
	text-align: center;
	height: 100%;
}

.questions_wrapper {
	display: flex;
	justify-content: center;
	/* align-items: center; */
	width: 100%;
	margin-bottom: 2rem;
}

.half_width {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 50%;
	padding-left: 0.5rem;
	padding-right: 0.5rem;
}

.question {
	font-size: 1.6rem;
	margin-bottom: 1rem;
}

.answers_container {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.answer_button {
	padding: 0.5rem 1rem;
	border-radius: 0.375rem;
	min-width: 15rem;
	font-weight: 600;
	transition: all 0.3s ease;
	font-size: 1.4rem;
	margin-bottom: 1rem;
}
.answer_button:last-child {
	margin-bottom: 0;
}

.answer_button:active {
	opacity: 0.8;
}

.selected {
	transform: scale(1.2);
}

.deselected {
	transform: scale(1);
}

.submit_button {
	background-color: #0ea5e9;
	color: white;
	font-size: 1.5rem;
	padding-top: 0.8rem;
	padding-bottom: 0.8rem;
	padding-left: 1.5rem;
	padding-right: 1.5rem;
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
