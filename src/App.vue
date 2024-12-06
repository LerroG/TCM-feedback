<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue'
</script>

<template>
	<AppLayout>
		<RouterView v-slot="{ Component }">
			<Transition mode="out-in">
				<component :is="Component" />
			</Transition>
		</RouterView>
	</AppLayout>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
	transition: all 0.4s ease-out;
}

.v-enter-from {
	opacity: 0;
	transform: translateX(40px);
}

.v-leave-to {
	opacity: 0;
	transform: translateX(-40px);
}
</style>
