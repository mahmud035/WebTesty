import React from 'react';
import './QuizTopic.css';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const QuizTopic = ({ quizTopic }) => {
  const { logo, name, total, id } = quizTopic;

  return (
    <div className="quiz-topic-card">
      <img src={logo} alt="" />
      <div className="topic-info">
        <h5>Topic: {name}</h5>
        <h6> Questions: {total}</h6>
        <Link to={`/quiz/${id}`}>
          <button className="btn-practice">
            Start Practice
            <FaArrowRight className="right-arrow-icon"></FaArrowRight>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default QuizTopic;
