<template>
	<div class="container">
		<div class="invite_text">{{ $t('We invite you to leave a review') }}!</div>
		<div class="options_list">
			<p class="option">{{ $t('Your opinion is very important to us') }}:</p>
			<div class="option">- {{ $t('About comfort and atmosphere') }}</div>
			<div class="option">- {{ $t('Assortment of stores') }}</div>
			<div class="option">- {{ $t('Service level') }}</div>
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
	font-size: 2.3rem;
	text-align: center;
	margin-bottom: 2rem;
}

.options_list {
	display: flex;
	flex-direction: column;
	margin-bottom: 3rem;
	font-size: 1.4rem;
}

.option {
	margin-bottom: 0.75rem;
}

.feedback_help_us {
	margin-bottom: 1.7rem;
	font-size: 1.4rem;
}

.leave_feedback {
	background-color: #3730a3; /* bg-indigo-800 */
	color: white; /* text-white */
	font-size: 2rem; /* text-xl */
	padding: 2rem; /* p-4 */
	border-radius: 0.375rem; /* rounded-md */
	transition: background-color 0.3s ease; /* transition-colors */
}

.leave_feedback:active {
	background-color: rgba(55, 48, 163, 0.9); /* active:bg-indigo-800/90 */
}
</style>
