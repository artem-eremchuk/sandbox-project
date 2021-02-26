import React from 'react';
import questionSign from '../QuestionCard/question-sign.png';
import './QuestionCard.css';
import AnswersField from '../AnswersField/AnswersField';

const QuestionCard = ({test, typeOfAnswer, index}) => {
  return (
    <div className="container">
      <img className="question-sign" src={questionSign} alt="question-sign" />
      <div className="question-card">
        <h3 className="question-card__title">{test.question}</h3>
        <AnswersField 
          index={index}
          test={test} 
          typeOfAnswer={typeOfAnswer} 
        />
      </div>
    </div>
  );
}

export default QuestionCard;