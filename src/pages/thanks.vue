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
		<h1 class="text-2xl mb-6">Спасибо за ваш отзыв!</h1>
		<p class="text-center text-lg px-4 mb-4">
			Мы искренне благодарим вас за то, что нашли время поделиться своим
			мнением. Ваши слова помогают нам становиться лучше и делать ваш опыт
			посещения нашего торгового центра ещё приятнее.
		</p>
		<button
			@click="router.push('/')"
			class="bg-indigo-800 text-white text-lg py-2 px-4 rounded-md active:bg-indigo-800/90 transition-colors"
		>
			На главную
		</button>
	</div>
</template>
