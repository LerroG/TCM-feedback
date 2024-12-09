<script setup lang="ts">
import { questions } from '@/questions'
import { QuestionResponse } from '@/types/questions.types'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

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
	router.push('/thanks')
}
</script>

<template>
	<div class="font-bold text-center h-full">
		<div class="flex justify-center items-center gap-4 h-[90%]">
			<div
				v-for="(item, idx) in questions[route.params.categoryName as string]"
				:key="idx"
			>
				<div class="text-lg mb-2">{{ idx + 1 }}. {{ item.question }}</div>
				<div class="flex flex-col gap-2 items-center">
					<button
						v-for="(answer, idx) in item.answers"
						:key="idx"
						@click="
							pushToAnswers({
								Question: item.question,
								Answer: answer.name,
								Lang: 'ru'
							})
						"
						class="py-2 px-4 rounded-md min-w-40 font-semibold active:opacity-80 transition-all"
						:style="{
							backgroundColor: answer.color,
							scale: selectedAnswers[item.question] === answer.name ? 1.2 : 1
						}"
					>
						{{ answer.name }}
					</button>
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
				Отправить
			</button>
		</div>
	</div>
</template>
