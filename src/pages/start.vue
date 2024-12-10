<template>
	<div class="container">
		<div class="invite_text">{{ $t('We invite you to leave a review') }}!</div>
		<div class="options_list">
			<p>{{ $t('Your opinion is very important to us') }}:</p>
			<div>- {{ $t('About comfort and atmosphere') }}</div>
			<div>- {{ $t('Assortment of stores') }}</div>
			<div>- {{ $t('Service level') }}</div>
			<div>- {{ $t('Convenient parking and infrastructure') }}</div>
		</div>
		<div class="feedback_help_us">{{ $t('Your feedback will help us') }}!</div>
		<RouterLink to="/categories">
			<button class="leave_feedback">
				{{ $t('Leave feedback') }}
			</button>
		</RouterLink>
	</div>
</template>

<style scoped>
.container {
	display: flex;
	flex-direction: column;
	align-items: center;
	font-weight: bold;
	text-align: center;
}

.invite_text {
	font-size: 1.5rem;
	text-align: center;
	margin-bottom: 1.25rem;
}

.options_list {
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
	margin-bottom: 1rem;
}

.feedback_help_us {
	margin-bottom: 1.25rem;
}

.leave_feedback {
	background-color: #3730a3; /* bg-indigo-800 */
	color: white; /* text-white */
	font-size: 1.25rem; /* text-xl */
	padding: 1rem; /* p-4 */
	border-radius: 0.375rem; /* rounded-md */
	transition: background-color 0.3s ease; /* transition-colors */
}

.leave_feedback:active {
	background-color: rgba(55, 48, 163, 0.9); /* active:bg-indigo-800/90 */
}
</style>
