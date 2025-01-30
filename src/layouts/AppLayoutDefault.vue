<script setup lang="ts">
import { loadLocaleMessages } from '@/lib/i18n'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const changeLanguage = async (lang: string) => {
	if (locale.value !== lang) {
		await loadLocaleMessages(lang)
		locale.value = lang
	}
}

// const isNeedButtonBack = computed(() => {
// 	return (
// 		route.path.startsWith('/categories') || route.path.startsWith('/category')
// 	)
// })
</script>

<template>
	<div class="layout_container bg_image">
		<div class="logo_container">
			<img class="logo_img" src="/Logo-yhxx.svg" alt="Logo" />
			<div class="logo_text">Mamuriy amaliyot markazi</div>
		</div>
		<main class="main_container">
			<slot />
		</main>
		<footer class="footer_container">
			<div class="lang_container">
				<button @click="changeLanguage('uz')" class="lang_button">
					<img class="lang_img" src="/flags/uzbekistan.svg" alt="Uzbek Flag" />
				</button>
				<button @click="changeLanguage('ru')" class="lang_button">
					<img class="lang_img" src="/flags/russia.svg" alt="Russia Flag" />
				</button>
			</div>
		</footer>
	</div>
</template>

<style scoped>
.layout_container {
	background: #fff;
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
}

.lang_container {
	display: flex;
	width: 100%;
	justify-content: center;
	align-items: center;
}

.lang_button {
	width: 6rem;
	height: 3.5rem;
	padding: 0;
	border: solid 1px #d6d6d6;
	border-radius: 0.25rem;
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

.logo_container {
	display: flex;
	align-items: end;
	margin-bottom: 0.5rem;
	height: 15%;
}

.logo_img {
	display: flex;
	height: 100%;
	margin-right: 1.5rem;
}

.logo_text {
	font-size: 2.5rem;
	font-weight: 700;
}
</style>
