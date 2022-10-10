import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizTopic from '../QuizTopic/QuizTopic';
import './Home.css';

const Home = () => {
  const quizTopics = useLoaderData()?.data;

  return (
    <div>
      <div className="quiz-topic-container container">
        {quizTopics.map((quizTopic, index) => (
          <QuizTopic key={index} quizTopic={quizTopic}></QuizTopic>
        ))}
      </div>
    </div>
  );
};

export default Home;
