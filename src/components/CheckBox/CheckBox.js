import React from 'react';
import './CheckBox.css';

const CheckBox = ({test}) => {
  const {answer1, answer2, answer3} = test;

  return (
    <div>
      <div className="container-checkbox">
        <input type="checkbox" id="answer-1" value="answer-1"/>
        <label htmlFor="answer-1">{answer1}</label>
      </div>

      <div className="container-checkbox">
        <input type="checkbox" id="answer-1" value="answer-2"/>
        <label htmlFor="answer-2">{answer2}</label>
      </div>

      <div className="container-checkbox">
        <input type="checkbox" id="answer-1" value="answer-3"/>
        <label htmlFor="answer-3">{answer3}</label>
      </div>
    </div>
  );
}

export default CheckBox;