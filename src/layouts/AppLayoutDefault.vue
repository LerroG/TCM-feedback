<template>
	<div class="w-screen h-screen p-6 bg_image">
		<main class="mb-4">
			<slot />
		</main>
		<footer class="flex gap-2 w-full justify-end">
			<div class="w-14 h-8 rounded-sm border overflow-hidden">
				<img
					class="w-full h-full object-cover"
					src="/flags/uzbekistan.svg"
					alt="O'zbek"
				/>
			</div>
			<div class="w-14 h-8 rounded-sm border overflow-hidden">
				<img
					class="w-full h-full object-cover"
					src="/flags/russia.svg"
					alt="O'zbek"
				/>
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
