import React from 'react';
import questions from '../API/QuizQuestions';
import Quiz from '../components/Quiz/Quiz';
import '../styles/Quiz.scss';

function QuizPage() {
    return (
        <div className="Quiz">
            <Quiz questions={questions} />
        </div>
    );
}

export default QuizPage;
