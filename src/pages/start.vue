<script setup lang="ts">
import { FeedbackQuestion } from '@/types/question.types'
import { onMounted, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'

const { locale } = useI18n()
const route = useRoute()
const router = useRouter()

const question = ref<FeedbackQuestion>()
// const selectedAnswer = ref()
const deviceId = ref(Number(route.query.DeviceId))
const emojisNames = ['excellent_smile.jpg', 'normal_smile.jpg', 'bad_smile.jpg']

const fetchFeedbackQuestion = async (): Promise<FeedbackQuestion | null> => {
	const baseUrl = window.SETTINGS.api + '/GetFeedbackQuestion'

	try {
		const url = new URL(baseUrl)
		url.searchParams.append('lang', locale.value)

		const response = await fetch(url.toString(), {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
				// Если требуется авторизация или другие заголовки, добавьте их здесь
			}
		})

		if (!response.ok) {
			throw new Error(`Ошибка HTTP: ${response.status}`)
		}

		const data: FeedbackQuestion = await response.json()
		question.value = data
		return data
	} catch (error) {
		console.error('Ошибка при выполнении запроса:', error)
		return null
	}
}

const pushToAnswer = async (answer: {
	QuestionId: number
	AnswerId: number
}) => {
	const bodyData = {
		DeviceId: deviceId.value,
		QuestionId: answer.QuestionId,
		AnswerId: answer.AnswerId,
		Lang: locale.value
	}

	const baseUrl = window.SETTINGS.api + '/StoreFeedbackAnswer'

	try {
		const response = await fetch(baseUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
				// Если требуется авторизация или другие заголовки, добавьте их здесь
			},
			body: JSON.stringify(bodyData)
		})

		if (!response.ok) {
			throw new Error(`Ошибка HTTP: ${response.status}`)
		}

		const data: FeedbackQuestion = await response.json()
		router.push({
			path: '/thanks',
			query: { DeviceId: deviceId.value }
		})
		return data
	} catch (error) {
		console.error('Ошибка при выполнении запроса:', error)
		return null
	}
}

// const handleSubmit = async () => {
// 	const baseUrl = window.SETTINGS.api + '/StoreFeedbackAnswer'

// 	try {
// 		const response = await fetch(baseUrl, {
// 			method: 'POST',
// 			headers: {
// 				'Content-Type': 'application/json'
// 				// Если требуется авторизация или другие заголовки, добавьте их здесь
// 			},
// 			body: JSON.stringify(selectedAnswer.value)
// 		})

// 		if (!response.ok) {
// 			throw new Error(`Ошибка HTTP: ${response.status}`)
// 		}

// 		const data: FeedbackQuestion = await response.json()
// 		router.push({
// 			path: '/thanks',
// 			query: { DeviceId: deviceId.value }
// 		})
// 		return data
// 	} catch (error) {
// 		console.error('Ошибка при выполнении запроса:', error)
// 		return null
// 	}
// }

onMounted(async () => {
	await fetchFeedbackQuestion()
})

watch(locale, async () => {
	await fetchFeedbackQuestion().then(res => {
		if (res) {
			console.log(res)
		} else {
			console.log('Не удалось получить данные')
		}
	})
})
</script>

<template>
	<div class="container">
		<div class="question">{{ question?.QuestionText }}</div>
		<div class="answer_container">
			<button
				class="answer_button"
				v-for="(answer, idx) in question?.answers"
				:key="answer.AnswerId"
				@click="
					pushToAnswer({
						QuestionId: question?.QuestionId!,
						AnswerId: answer.AnswerId
					})
				"
			>
				<img
					class="button_img"
					:src="emojisNames[idx]"
					:alt="answer.AnswerText"
				/>
				<div>{{ answer.AnswerText }}</div>
			</button>
		</div>
		<!-- <button
			@click="handleSubmit"
			class="submit_button"
			:disabled="!selectedAnswer"
		>
			{{ $t('Send') }}
		</button> -->
	</div>
</template>

<style scoped>
.container {
	display: flex;
	flex-direction: column;
	align-items: center;
	font-weight: bold;
	text-align: center;
	padding-top: 1rem;
	height: 100%;
	width: 100%;
}

.question {
	font-size: 2.1rem;
	font-weight: 700;
	margin-bottom: 1rem;
}

.answer_container {
	display: flex;
	height: 70%;
	width: 100%;
}

.answer_button {
	background: none;
	border: none;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 0.375rem;
	padding: 0.5rem 1rem;
	width: 20rem;
	height: 20rem;
	font-weight: 600;
	transition: all 0.3s ease;
	font-size: 1.8rem;
}

.answer_button:active {
	background: none;
	border: none;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 0.375rem;
	padding: 0.5rem 1rem;
	width: 20rem;
	height: 20rem;
	font-weight: 600;
	transition: all 0.3s ease;
	font-size: 1.8rem;
}

.button_img {
	height: 70%;
}

.submit_button {
	background-color: #004239;
	color: #feca20;
	font-size: 1.5rem;
	padding-top: 0.8rem;
	padding-bottom: 0.8rem;
	padding-left: 1.5rem;
	padding-right: 1.5rem;
	border-radius: 0.375rem;
	transition: background-color 0.3s ease;
}

.submit_button:disabled {
	background-color: #cbd5e1;
	color: #818181;
}

.selected {
	transform: scale(1.2);
}

.deselected {
	transform: scale(1);
}
</style>
