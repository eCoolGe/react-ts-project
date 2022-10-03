export default interface IQuiz {
    questions: {
        title: string
        variants: string[]
        correct: number
    }[]
}