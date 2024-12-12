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
	<div class="layout_container bg_image">
		<img class="logo_img" src="/logo.png" alt="Logo" />
		<main class="main_container">
			<slot />
		</main>
		<footer class="footer_container">
			<button
				@click="router.back()"
				v-if="isNeedButtonBack"
				class="button_back"
			>
				{{ $t('BACK') }}
			</button>
			<div class="lang_container">
				<button @click="changeLanguage('en')" class="lang_button">
					<img class="lang_img" src="/flags/usa.svg" alt="USA Flag" />
				</button>
				<button @click="changeLanguage('ru')" class="lang_button">
					<img class="lang_img" src="/flags/russia.svg" alt="Russia Flag" />
				</button>
				<button @click="changeLanguage('uz')" class="lang_button">
					<img class="lang_img" src="/flags/uzbekistan.svg" alt="Uzbek Flag" />
				</button>
			</div>
		</footer>
	</div>
</template>

<style scoped>
.bg_image {
	background-image: url('/bg.png');
	background-size: cover;
	background-position: center;
}

.layout_container {
	width: 100vw;
	height: 100vh;
	padding: 1.5rem 2rem 1rem 2rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
}

.main_container {
	margin-bottom: 1rem;
	height: 70%;
	overflow-y: auto;
	overflow-x: hidden;
}

.footer_container {
	display: flex;
	width: 100%;
	height: 10%;
	align-items: flex-end;
	justify-content: space-between;
	padding-left: 0.5rem;
	padding-right: 0.5rem;
}

.button_back {
	background-color: #3730a3;
	color: white;
	font-size: 1.25rem;
	padding: 0.8rem 1.6rem;
	border-radius: 0.375rem;
	transition: background-color 0.3s ease;
}

.button_back:active {
	background-color: rgba(55, 48, 163, 0.9);
}

.lang_container {
	display: flex;
	width: 100%;
	justify-content: flex-end;
	align-items: center;
}

.lang_button {
	width: 6rem;
	height: 3.5rem;
	padding: 0;
	border: none;
	border-radius: 0.125rem;
	align-items: center;
	justify-content: center;
	display: flex;
	overflow: hidden;
	margin-left: 0.8rem;
}

.lang_img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.logo_img {
	margin-bottom: 0.5rem;
	height: 15%;
}
</style>
