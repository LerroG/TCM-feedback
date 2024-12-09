import { createI18n } from 'vue-i18n'

const i18n = createI18n({
	locale: 'uz',
	fallbackLocale: 'uz',
	messages: {}
})

export const loadLocaleMessages = async (locale: string) => {
	try {
		const messages = await import(`./locales/${locale}.json`)
		i18n.global.setLocaleMessage(locale, messages.default)
		return locale
	} catch (e) {
		console.log(`Не удалось загрузить язык ${locale}:`, e)
	}
}

export default i18n
