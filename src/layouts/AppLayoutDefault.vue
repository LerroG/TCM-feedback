<script setup lang="ts">
import { loadLocaleMessages } from '@/lib/i18n'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'

const { locale } = useI18n()
const route = useRoute()
const router = useRouter()

const changeLanguage = async (lang: string) => {
	if (locale.value !== lang) {
		await loadLocaleMessages(lang)
		locale.value = lang
	}
}

const isNeedButtonBack = computed(() => {
	return (
		route.path.startsWith('/categories') || route.path.startsWith('/category')
	)
})
</script>

<template>
	<div class="w-screen h-screen p-4 bg_image flex flex-col justify-between">
		<main class="mb-4 h-full">
			<slot />
		</main>
		<footer class="flex gap-4 w-full items-end justify-between">
			<button
				@click="router.back()"
				v-if="isNeedButtonBack"
				class="bg-indigo-800 text-white text-xl py-2 px-4 rounded-md active:bg-indigo-800/90 transition-colors"
			>
				{{ $t('BACK') }}
			</button>
			<div class="flex gap-2 w-full justify-end items-center">
				<button
					@click="changeLanguage('en')"
					class="w-16 h-10 rounded-sm overflow-hidden"
				>
					<img class="w-full h-full" src="/flags/usa.svg" alt="USA Flag" />
				</button>
				<button
					@click="changeLanguage('ru')"
					class="w-16 h-10 rounded-sm overflow-hidden"
				>
					<img
						class="w-full h-full"
						src="/flags/russia.svg"
						alt="Russia Flag"
					/>
				</button>
				<button
					@click="changeLanguage('uz')"
					class="w-16 h-10 rounded-sm overflow-hidden"
				>
					<img
						class="w-full h-full"
						src="/flags/uzbekistan.svg"
						alt="Uzbek Flag"
					/>
				</button>
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
