export default interface IQuizGame {
    stepPercentage: number,
    question: {
        title: string,
        variants: string[],
        correct: number
    }
    onClickVariant: Function
}