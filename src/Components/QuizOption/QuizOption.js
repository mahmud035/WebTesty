import React from 'react';
import './QuizOption.css';

const QuizOption = ({ option, handleRightAndWrongAnswer }) => {
  return (
    <div>
      <p
        onClick={(e) => handleRightAndWrongAnswer(e.target)}
        className="option"
      >
        {option}
      </p>
    </div>
  );
};

export default QuizOption;
