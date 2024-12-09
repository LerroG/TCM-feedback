<template>
	<div class="flex flex-col items-center font-bold text-center">
		<div class="text-2xl text-center mb-5">
			{{ $t('We invite you to leave a review') }}!
		</div>
		<div class="flex flex-col gap-3 mb-4">
			<p>{{ $t('Your opinion is very important to us') }}:</p>
			<div>- {{ $t('About comfort and atmosphere') }}</div>
			<div>- {{ $t('Assortment of stores') }}</div>
			<div>- {{ $t('Service level') }}</div>
			<div>- {{ $t('Convenient parking and infrastructure') }}</div>
		</div>
		<div class="mb-5">{{ $t('Your feedback will help us') }}!</div>
		<RouterLink to="/categories">
			<button
				class="bg-indigo-800 text-white text-xl p-4 rounded-md active:bg-indigo-800/90 transition-colors"
			>
				{{ $t('Leave feedback') }}
			</button>
		</RouterLink>
	</div>
</template>
