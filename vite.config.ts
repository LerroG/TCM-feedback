import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

// https://vite.dev/config/
export default defineConfig({
	base: '/feedback', // Путь для деплоя, если нужно
	build: {
		outDir: 'dist',
		assetsDir: 'assets'
	},
	css: {
		postcss: {
			plugins: [tailwindcss(), autoprefixer()] // Автопрефиксы для CSS
		}
	},
	plugins: [
		vue(),
		legacy({
			targets: ['ie >= 11'], // Поддержка IE11 и старше
			additionalLegacyPolyfills: ['regenerator-runtime/runtime', 'core-js'] // Полифилы для старых браузеров
		})
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src') // Упрощаем пути к модулям
		}
	}
})
