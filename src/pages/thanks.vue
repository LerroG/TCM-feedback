<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
let timeoutId: ReturnType<typeof setTimeout>

onMounted(() => {
	timeoutId = setTimeout(() => {
		router.push('/')
	}, 20000)
})

onUnmounted(() => {
	clearTimeout(timeoutId)
})
</script>

<template>
	<div
		class="font-bold flex flex-col justify-center items-center w-full h-full"
	>
		<h1 class="text-2xl mb-6">{{ $t('Thank you for your feedback') }}</h1>
		<p class="text-center text-lg px-4 mb-4">
			{{
				$t('We sincerely thank you for taking the time to share your opinion')
			}}
		</p>
		<button
			@click="router.push('/')"
			class="bg-indigo-800 text-white text-lg py-2 px-4 rounded-md active:bg-indigo-800/90 transition-colors"
		>
			{{ $t('Main page') }}
		</button>
	</div>
</template>
