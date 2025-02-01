import React, { useState } from 'react';
import './QuizApp.css';

const QuizApp = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questions = [
    {
      questionText: 'Which of these cities is the capital of France?',
      answers: [
        { answer: 'Berlin', isCorrect: false },
        { answer: 'Rome', isCorrect: false },
        { answer: 'Paris', isCorrect: true },
        { answer: 'Madrid', isCorrect: false },
      ],
    },
    {
      questionText: 'Which of these is a planet in the solar system?',
      answers: [
        { answer: 'Moon', isCorrect: false },
        { answer: 'Venus', isCorrect: true },
        { answer: 'Polaris', isCorrect: false },
        { answer: 'Andromeda', isCorrect: false },
      ],
    },
    {
      questionText: 'Who was the founder of the Safavid Dynasty?',
      answers: [
        { answer: 'Shah Abbas I', isCorrect: false },
        { answer: 'Ismail I', isCorrect: true },
        { answer: 'Nader Shah', isCorrect: false },
        { answer: 'Karim Khan Zand', isCorrect: false },
      ],
    },
    {
      questionText: '2x+5=15 , x=?',
      answers: [
        { answer: '5', isCorrect: true },
        { answer: '10', isCorrect: false },
        { answer: '7.5', isCorrect: false },
        { answer: '20', isCorrect: false },
      ],
    },
    {
      questionText: 'Which country is known as the "Land of the Rising Sun"?',
      answers: [
        { answer: 'China', isCorrect: false },
        { answer: 'South Korea', isCorrect: false },
        { answer: 'Thailand', isCorrect: false },
        { answer: 'Japan', isCorrect: true },
      ],
    },
  ];

  const answerClickHandler = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <section className="Quiz">
      {showScore ? (
        <div className="Score">
          Your Score is: {score}/{questions.length}
        </div>
      ) : (
        <div>
          <div className="Question box">
            <h1>
              {currentQuestionIndex + 1}- {questions[currentQuestionIndex].questionText}
            </h1>
          </div>

          <div className="Answers box">
            {questions[currentQuestionIndex].answers.map((answer, index) => (
              <div
                key={index}
                className="Answer"
                onClick={() => answerClickHandler(answer.isCorrect)}
              >
                <p>{answer.answer}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default QuizApp;