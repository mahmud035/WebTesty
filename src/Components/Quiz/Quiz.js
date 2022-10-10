import React from 'react';
import QuizOption from '../QuizOption/QuizOption';
import './Quiz.css';

const Quiz = ({ quiz, index }) => {
  const { question, options, correctAnswer } = quiz;
  console.log(quiz);

  const handleRightAndWrongAnswer = (optionElement) => {
    const selectedOption = optionElement.innerText;
    if (selectedOption === correctAnswer) {
      optionElement.classList.add('right-answer');
    } else {
      optionElement.classList.add('wrong-answer');
    }
  };

  return (
    <div className="quiz-card">
      <h5>
        Quiz {index + 1}: {question}
      </h5>

      <div className="quiz-option-container">
        {options.map((option, index) => (
          <QuizOption
            key={index}
            option={option}
            handleRightAndWrongAnswer={handleRightAndWrongAnswer}
          ></QuizOption>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
