import React from 'react';
import questionSign from '../QuestionCard/question-sign.png';
import './QuestionCard.css';
import AnswersField from '../AnswersField/AnswersField';

const QuestionCard = (props) => {
  const {
      test, 
      index, 
      handleTextArea,
      handleRadioButton,
      handleCheckBoxInput,
      handleInputChange
    } = props;

  return (
    <div className="container">
      <img className="question-sign" src={questionSign} alt="question-sign" />
      <div className="question-card">
        <h3 className="question-card__title">{test.question}</h3>
        <AnswersField 
          test={test} 
          index={index}
          handleTextArea={handleTextArea}
          handleRadioButton={handleRadioButton}
          handleCheckBoxInput={handleCheckBoxInput}
          handleInputChange={handleInputChange}
        />
      </div>
    </div>
  );
}

export default QuestionCard;