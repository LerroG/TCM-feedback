import { createRouter, createWebHistory } from 'vue-router'
import { loadLayoutMiddleware } from '@/router/middleware/loadLayout.middleware'
import { RouteNamesEnum } from '@/router/router.types'

const routes = [
	{
		path: '/',
		name: RouteNamesEnum.start,
		component: () => import('@/pages/start.vue')
		// meta: { titleKey: 'Feedback reports' }
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

router.beforeEach(loadLayoutMiddleware)

export default router
