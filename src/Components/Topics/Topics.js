import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizTopic from '../QuizTopic/QuizTopic';
import './Topics.css';

const Topics = () => {
  const quizTopics = useLoaderData()?.data;
  return (
    <div>
      <div className="quiz-topic-content-container topics-route">
        <div className="quiz-topic-container container">
          {quizTopics.map((quizTopic) => (
            <QuizTopic key={quizTopic.id} quizTopic={quizTopic}></QuizTopic>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Topics;
