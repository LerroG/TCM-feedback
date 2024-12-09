import type { VueElement } from 'vue'
import type { AppLayoutsEnum } from '@/layouts/layouts.types'

declare module 'vue-router' {
	interface RouteMeta {
		layout?: AppLayoutsEnum
		layoutComponent?: VueElement
		titleKey: string
	}
}

export enum RouteNamesEnum {
	start = 'start',
	categories = 'categories',
	category = 'category',
	thanks = 'thanks'
}
