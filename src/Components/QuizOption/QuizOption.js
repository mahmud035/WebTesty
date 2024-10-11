import React from 'react';
import './QuizOption.css';

const QuizOption = ({ option, handleRightAndWrongAnswer }) => {
  return (
    <div>
      <p
        onClick={(e) => handleRightAndWrongAnswer(e.target)}
        onKeyDown={(e) =>
          e.key === 'Enter' ? handleRightAndWrongAnswer(e.target) : null
        }
        role="button"
        tabIndex={0}
        className="option"
      >
        {option}
      </p>
    </div>
  );
};

export default QuizOption;
