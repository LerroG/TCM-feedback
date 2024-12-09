export {}

declare global {
	interface Window {
		SETTINGS: { api: string; deviceName: string }
	}
}
