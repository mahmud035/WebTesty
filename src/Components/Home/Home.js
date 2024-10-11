import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import bg from '../../images/bg.webp';
import QuizTopic from '../QuizTopic/QuizTopic';
import './Home.css';

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
          <Link to="/topics" className="btn-header-practice">
            Let's Practice
          </Link>
        </div>
      </div>

      <div className="quiz-topic-content-container">
        <div className="quiz-topic-container container">
          {quizTopics.map((quizTopic) => (
            <QuizTopic key={quizTopic.id} quizTopic={quizTopic} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
