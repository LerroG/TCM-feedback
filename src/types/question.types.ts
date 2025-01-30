export interface Answer {
	AnswerId: number
	AnswerText: string
}

export interface FeedbackQuestion {
	QuestionId: number
	QuestionText: string
	answers: Answer[]
}
