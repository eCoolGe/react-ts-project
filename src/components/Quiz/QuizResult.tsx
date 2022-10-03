import IQuizResult from "../../interfaces/quiz-result.interface";
import styles from "./Quiz.module.scss"

const QuizResult = ({ correct, total, onClick }: IQuizResult) => {
    const correctProcentage = Math.round(correct / total * 100)

    return (
        <div className={styles.result}>
            <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
            <h2>Вы отгадали ответов: {correct} из {total}</h2>
            <h4>Правильных ответов: {correctProcentage}%</h4>
            <button onClick={() => onClick()}>Попробовать снова</button>
        </div>
    );
}

export default QuizResult;