<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
let timeoutId: ReturnType<typeof setTimeout>

onMounted(() => {
	timeoutId = setTimeout(() => {
		router.push('/')
	}, 10000)
})

onUnmounted(() => {
	clearTimeout(timeoutId)
})
</script>

<template>
	<div class="container">
		<h1 class="thank_you">{{ $t('Thank you for your feedback') }}</h1>
		<p class="we_sincerely">
			{{
				$t('We sincerely thank you for taking the time to share your opinion')
			}}
		</p>
		<button @click="router.push('/')" class="main_page_button">
			{{ $t('Main page') }}
		</button>
	</div>
</template>

<style scoped>
.container {
	font-weight: bold;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
}

.thank_you {
	font-size: 3rem;
	margin-bottom: 1.5rem;
}

.we_sincerely {
	text-align: center;
	font-size: 1.5rem;
	padding-left: 1rem;
	padding-right: 1rem;
	margin-bottom: 1rem;
}

.main_page_button {
	background-color: #3730a3;
	color: white;
	font-size: 1.5rem;
	padding-top: 1rem;
	padding-bottom: 1rem;
	padding-left: 2rem;
	padding-right: 2rem;
	border-radius: 0.375rem;
	transition: background-color 0.3s;
}

.main_page_button:active {
	background-color: rgba(55, 48, 163, 0.9);
}
</style>
