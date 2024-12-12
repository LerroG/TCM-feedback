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
		<RouterLink class="leave_feedback" to="/categories">
			{{ $t('Leave feedback') }}
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
	padding-top: 1rem;
	/* height: 90%; */
}

.invite_text {
	font-size: 2rem;
	text-align: center;
	margin-bottom: 0.75rem;
}

.options_list {
	display: flex;
	flex-direction: column;
	margin-bottom: 1rem;
	font-size: 1.5rem;
}

.option {
	margin-bottom: 0.5rem;
}

.feedback_help_us {
	margin-bottom: 2rem;
	font-size: 1.5rem;
}

.leave_feedback {
	background-color: #3730a3;
	color: white;
	font-size: 2rem;
	padding: 1rem 2rem;
	border-radius: 0.375rem;
	transition: background-color 0.2s ease;
}

.leave_feedback:active {
	background-color: rgba(55, 48, 163, 0.9);
}
</style>
