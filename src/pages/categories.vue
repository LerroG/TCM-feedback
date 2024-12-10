<script setup lang="ts">
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
	{ name: 'Mobile application', link: 'mobile-app' },
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
			:to="`/category/${route.link}`"
		>
			<button class="category_button">
				{{ $t(`${route.name}`) }}
			</button>
		</RouterLink>
	</div>
</template>

<style scoped>
.categories_container {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 0.5rem;
}

.category_button {
	width: 100%;
	height: 6rem;
	background-color: #3730a3;
	color: white;
	font-size: 1.125rem;
	padding: 0.5rem;
	border-radius: 0.375rem;
	transition: background-color 0.3s ease;
	display: block;
}
.category_button:active {
	background-color: rgba(55, 48, 163, 0.9);
}
</style>
