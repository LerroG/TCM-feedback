<script setup lang="ts">
import { mySetTimeout } from '@/lib/customTimeout'
import { onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
let cancelTimer: () => void

onMounted(() => {
	cancelTimer = mySetTimeout(() => {
		router.push('/')
	}, 60000)
})

onUnmounted(() => {
	// Отменяем таймер при размонтировании компонента
	if (cancelTimer) {
		cancelTimer()
	}
})

const categoryNames = [
	{ name: 'Service Quality', link: 'quality' },
	{ name: 'Cleanliness', link: 'cleanliness' },
	{ name: 'Shops and tenants', link: 'tenants' },
	{ name: 'Comfort (smell)', link: 'comfort' },
	{ name: 'Security', link: 'security' },
	{ name: 'Restaurants', link: 'restaurants' },
	{ name: 'Music', link: 'music' },
	{ name: 'Overall Impression of the Mall', link: 'general-impressions' },
	{ name: 'Parking', link: 'parking' },
	{ name: 'Temperature', link: 'temperature' },
	{ name: 'Navigation', link: 'navigation' },
	{ name: 'Rest Areas', link: 'recreation-areas' },
	{ name: 'Safety', link: 'safety' },
	{ name: 'Website', link: 'mobile-app' },
	{ name: 'Promotions and events', link: 'promotions' },
	{
		name: 'Accessibility for all categories of visitors',
		link: 'accessibility'
	}
]
</script>

<template>
	<div class="categories_container">
		<RouterLink
			v-for="route in categoryNames"
			:key="route.link"
			class="category_button"
			:to="`/category/${route.link}`"
		>
			{{ $t(`${route.name}`) }}
		</RouterLink>
	</div>
</template>

<style scoped>
.categories_container {
	width: 100%;
	height: 100%;
	display: flex;
	flex-wrap: wrap;
}

.category_button {
	flex: 1 1 calc(25% - 2rem);
	margin: 0.5rem;
	min-height: calc(25% - 1rem);
	background-color: #3730a3;
	color: white;
	font-size: 1.8rem;
	padding: 0.5rem;
	display: flex;
	text-align: center;
	justify-content: center;
	align-items: center;
	border-radius: 0.375rem;
	transition: background-color 0.3s ease;
}
.category_button:active {
	background-color: rgba(55, 48, 163, 0.9);
}
</style>
