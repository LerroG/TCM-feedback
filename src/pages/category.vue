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

	Promise.all(requests)
		.then(results => {
			router.push('/thanks')
			console.log('All responses:', results)
		})
		.catch(error => {
			console.error('Error in one or more requests:', error)
		})
}
</script>

<template>
	<div class="font-bold text-center h-full">
		<div class="flex items-center justify-center w-full h-[90%]">
			<div class="flex justify-center items-start gap-4">
				<div
					:class="{'w-1/2': questions[route.params.categoryName as string].length > 1}"
					v-for="(item, idx) in questions[route.params.categoryName as string]"
					:key="idx"
				>
					<div class="text-lg mb-4">
						{{ idx + 1 }}. {{ $t(`${item.question}`) }}
					</div>
					<div class="flex flex-col gap-2 items-center">
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
							class="py-2 px-4 rounded-md min-w-52 font-semibold active:opacity-80 transition-all"
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
		<div class="h-[10%]">
			<button
				type="submit"
				@click="handleSubmit"
				class="bg-sky-500 text-white text-xl py-2 px-4 rounded-md active:bg-sky-500/90 transition-colors disabled:bg-slate-300"
				:disabled="answersData.length < questions[route.params.categoryName as string].length"
			>
				{{ $t('Send') }}
			</button>
		</div>
	</div>
</template>
