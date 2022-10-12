import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizTopic from '../QuizTopic/QuizTopic';
import './Home.css';
import bg from '../../images/bg.webp';

const Home = () => {
  const quizTopics = useLoaderData()?.data;
  const myStyle = {
    backgroundImage: `url(${bg})`,
    height: `calc(100vh - 74px)`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'overlay',
  };

  return (
    <div>
      <div style={myStyle}></div>

      <div className="quiz-topic-container container">
        {quizTopics.map((quizTopic, index) => (
          <QuizTopic key={index} quizTopic={quizTopic}></QuizTopic>
        ))}
      </div>
    </div>
  );
};

export default Home;
