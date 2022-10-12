import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './AllQuiz.css';

const AllQuiz = () => {
  const quizTopicData = useLoaderData()?.data;
  const allQuiz = quizTopicData?.questions;

  const { name } = quizTopicData;

  return (
    <div className="all-quiz-container">
      <h1>Quiz of {name}</h1>

      <div className="quiz-card-container">
        {allQuiz.map((quiz, index) => (
          <Quiz key={index} quiz={quiz} index={index}></Quiz>
        ))}
      </div>
    </div>
  );
};

export default AllQuiz;
