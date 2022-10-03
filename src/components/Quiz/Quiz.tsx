import { useState } from "react"
import IQuiz from "../../interfaces/quiz.interface"
import QuizGame from "./QuizGame"
import QuizResult from "./QuizResult"
import styles from "./Quiz.module.scss"

const Quiz = ({ questions }: IQuiz) => {
    const [step, setStep] = useState(0)
    const [correct, setCorrect] = useState(0)
    const question = questions[step]
    const stepPercentage = Math.round(step / questions.length * 100)

    const onClickVariant = (index: number) => {
        setStep((prevStep) => prevStep + 1)

        if (index === question.correct) {
            setCorrect((prevCorrect) => prevCorrect + 1)
        }
    }

    const onResultButtonClick = () => {
        setStep(0)
        setCorrect(0)
    }

    return (
        <div className={styles.block}>
            {
                step !== questions.length
                    ?
                    <QuizGame
                        stepPercentage={stepPercentage}
                        question={question}
                        onClickVariant={onClickVariant}
                    />
                    :
                    <QuizResult
                        correct={correct}
                        total={questions.length}
                        onClick={onResultButtonClick}
                    />
            }
        </div>
    );
}

export default Quiz;