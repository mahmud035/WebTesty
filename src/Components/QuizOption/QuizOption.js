import React from 'react';
import './QuizOption.css';

const QuizOption = ({ option }) => {
  console.log(option);
  return (
    <div>
      <p>{option}</p>
    </div>
  );
};

export default QuizOption;
