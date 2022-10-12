import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
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
    position: 'relative',
  };

  return (
    <div>
      <div style={myStyle}>
        <div className="header-content">
          <h1>Test Your Knowledge</h1>
          <p>
            WebTesty is a simple react website where users can participate in
            various quizzes and test their knowledge on particular topics.
          </p>
          <Link className="btn-header-practice">Let's Practice</Link>
        </div>
      </div>

      <div className="quiz-topic-content-container">
        <div className="quiz-topic-container container">
          {quizTopics.map((quizTopic, index) => (
            <QuizTopic key={index} quizTopic={quizTopic}></QuizTopic>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
