import { createApp } from 'vue'
import './index.css'
import router from './router'
import i18n, { loadLocaleMessages } from '@/lib/i18n'
import App from './App.vue'

const app = createApp(App)

loadLocaleMessages('uz')

app.use(router)
app.use(i18n)

app.mount('#app')
