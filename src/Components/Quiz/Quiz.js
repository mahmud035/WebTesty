import React from 'react';
import QuizOption from '../QuizOption/QuizOption';
import './Quiz.css';

const Quiz = ({ quiz, index }) => {
  console.log(quiz);
  const { question, options } = quiz;

  return (
    <div className="quiz-card">
      <h5>
        Quiz {index + 1}: {question}
      </h5>

      {options.map((option, index) => (
        <QuizOption key={index} option={option}></QuizOption>
      ))}
    </div>
  );
};

export default Quiz;
