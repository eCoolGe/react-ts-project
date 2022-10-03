import IQuizGame from "../../interfaces/quiz-game.interface";
import styles from "./Quiz.module.scss"

const QuizGame = ({ stepPercentage, question, onClickVariant }: IQuizGame) => {
    return (
        <>
            <div className={styles.progress}>
                <div style={{ width: `${stepPercentage}%` }} className={styles.progressInner}></div>
            </div>
            <h1>{question.title}</h1>
            <ul>
                {
                    question.variants.map((text: string, index: number) => (
                        <li onClick={() => onClickVariant(index)} key={index}>
                            {text}
                        </li>
                    ))
                }
            </ul>
        </>
    );
}

export default QuizGame;