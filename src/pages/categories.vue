<script setup lang="ts">
const categoryNames = [
	{ name: 'Quality of service', link: 'quality' },
	{ name: 'Purity', link: 'purity' },
	{ name: 'Shops and tenants', link: 'tenants' },
	{ name: 'Comfort (smell)', link: 'comfort' },
	{ name: 'Security', link: 'security' },
	{ name: 'Restaurants', link: 'restaurants' },
	{ name: 'Music', link: 'music' },
	{ name: 'General impressions of the SEC', link: 'general-impressions' },
	{ name: 'Parking', link: 'parking' },
	{ name: 'Temperature', link: 'temperature' },
	{ name: 'Navigation', link: 'navigation' },
	{ name: 'Recreation areas', link: 'recreation-areas' },
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
				class="w-full h-24 bg-indigo-800 text-white text-xl p-2 rounded-md active:bg-indigo-800/90 transition-colors"
			>
				{{ route.name }}
			</button>
		</RouterLink>
	</div>
</template>
