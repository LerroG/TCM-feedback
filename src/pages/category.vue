<script setup lang="ts">
import { questions } from '@/questions'
import { QuestionResponse } from '@/types/questions.types'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const answersData = ref<QuestionResponse[]>([])

const pushToAnswers = (question: QuestionResponse) => {
	const isExistsAnswer = answersData.value?.some(
		answer => answer.Question === question.Question
	)

	if (!isExistsAnswer) {
		answersData.value?.push(question)
	} else {
		answersData.value?.forEach(item =>
			item.Question === question.Question ? question.Answer : item
		)
	}
	console.log(answersData.value)
}

const handleSubmit = () => {
	console.log(answersData.value)
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
						class="py-2 px-4 rounded-md min-w-40 font-semibold active:opacity-80 transition-opacity"
						:style="{ backgroundColor: answer.color }"
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
				class="bg-sky-500 text-white text-xl py-2 px-4 rounded-md active:bg-sky-500/90 transition-colors"
			>
				Отправить
			</button>
		</div>
	</div>
</template>

<!-- <style scoped>
.button_opacity:active {
	@apply opacity-90;
}
</style> -->
