<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const isNeedButtonBack = computed(() => {
	return (
		route.path.startsWith('/categories') || route.path.startsWith('/category')
	)
})
</script>

<template>
	<div class="w-screen h-screen p-4 bg_image flex flex-col justify-between">
		<main class="mb-4">
			<slot />
		</main>
		<footer class="flex gap-4 w-full items-end justify-between">
			<button
				@click="router.back()"
				v-if="isNeedButtonBack"
				class="bg-indigo-800 text-white text-xl py-2 px-4 rounded-md active:bg-indigo-800/90 transition-colors"
			>
				НАЗАД
			</button>
			<div class="flex gap-4 w-full justify-end">
				<div class="w-16 h-10 rounded-sm overflow-hidden">
					<img class="w-full h-full" src="/flags/uzbekistan.svg" alt="O'zbek" />
				</div>
				<div class="w-16 h-10 rounded-sm overflow-hidden">
					<img class="w-full h-full" src="/flags/russia.svg" alt="O'zbek" />
				</div>
			</div>
		</footer>
	</div>
</template>

<style scoped>
.bg_image {
	background-image: url('/bg_2.png');
	background-size: cover;
	background-position: center;
}
</style>
