<script setup lang="ts">
import { questions } from '@/questions'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
	<div class="font-bold text-center h-full">
		<div class="flex justify-center items-center gap-4 h-[90%]">
			<div
				v-for="(item, idx) in questions[route.params.categoryName as string]"
				:key="idx"
			>
				<div class="text-lg mb-2">{{ idx + 1 }}. {{ item.question }}</div>
				<div class="flex flex-col gap-2 items-center">
					<button
						v-for="(answer, idx) in item.answers"
						:key="idx"
						class="py-2 px-4 rounded-md min-w-40 font-semibold active:opacity-80 transition-opacity"
						:style="{ backgroundColor: answer.color }"
					>
						{{ answer.name }}
					</button>
				</div>
			</div>
		</div>
		<div class="h-[10%]">
			<button
				class="bg-sky-500 text-white text-xl py-2 px-4 rounded-md active:bg-sky-500/90 transition-colors"
			>
				Отправить
			</button>
		</div>
	</div>
</template>

<!-- <style scoped>
.button_opacity:active {
	@apply opacity-90;
}
</style> -->
