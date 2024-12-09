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
	<div class="grid grid-cols-4 gap-2">
		<RouterLink
			v-for="route in categoryNames"
			:key="route.link"
			:to="`/category/${route.link}`"
		>
			<button
				class="w-full h-24 bg-indigo-800 text-white text-lg p-2 rounded-md active:bg-indigo-800/90 transition-colors block"
			>
				{{ $t(`${route.name}`) }}
			</button>
		</RouterLink>
	</div>
</template>
