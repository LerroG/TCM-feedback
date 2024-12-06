export interface Question {
	question: string
	answers: Answer[]
}

export interface Answer {
	name: string
	color: string
}

export interface Questions {
	[key: string]: Question[]
}
