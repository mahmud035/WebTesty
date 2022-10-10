import React from 'react';
import QuizOption from '../QuizOption/QuizOption';
import './Quiz.css';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Quiz = ({ quiz, index }) => {
  const { question, options, correctAnswer } = quiz;
  console.log(quiz);

  const handleRightAndWrongAnswer = (optionElement) => {
    const selectedOption = optionElement.innerText;
    if (selectedOption === correctAnswer) {
      optionElement.classList.add('right-answer');
      toast.success('Wow Right Answer!', {
        position: 'top-center',
        autoClose: 500,
      });
    } else {
      optionElement.classList.add('wrong-answer');
      toast.error('Oops Wrong Answer', {
        position: 'top-center',
        autoClose: 500,
      });
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
      <ToastContainer position="top-center" autoClose={500} />
    </div>
  );
};

export default Quiz;
