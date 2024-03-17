import React, { useState } from 'react'
import './App.css'
import questions from './Question.js'
function QuizApp() {
    const [questionIxd, setQuestionIxd] = useState(0);
    const [score, setScore] = useState(0)
    const currentQues = questions[questionIxd];
    const [showScore, setshowScore] = useState(false);
    const selectOption = (idx) => {
        console.log(idx);
        // alert("Welcome for the Quiz test");
        if (currentQues.answer === idx) {
            setScore(score + 1);
        }
        const nextQues = questionIxd + 1;
        if (nextQues < questions.length) {

            setQuestionIxd(questionIxd + 1);
        } else {
            setshowScore(true);
        }

    };

    const restartQuiz = () => {
        setQuestionIxd(0);
        setScore(0);
        setshowScore(false);

    }

    return (
        <div>
            <h1 className='h'>Quiz App</h1>
            {
                showScore ? (<div className='result-quiz'>
                    <h1>Your Score : {score}</h1><br /><br />
                    <button className='btn' onClick={restartQuiz}>Reset</button>
                </div>) : (
                    <div className='quiz-question'>
                        <p>{currentQues.question}</p>
                        <div className='quiz-options'>
                            <ul className='quiz-ul'>

                                {currentQues.options.map((option, i) => {
                                    return <li className='quiz-li' onClick={() => selectOption(i)}>{option}</li>
                                })}
                            </ul>
                        </div>
                    </div>
                )}
        </div>
    )

}

export default QuizApp
