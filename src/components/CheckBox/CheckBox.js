import React from 'react';
import './CheckBox.css';

const CheckBox = ({test, handleCheckBoxInput}) => {

  const data = test.answers.map((unit, index) => {
    return (
      <div className="container-checkbox" key={index}>
        <input
          type="checkbox"
          id={unit.answer}  
          value={unit.answer}
          onChange={handleCheckBoxInput}
        />
        <label htmlFor={unit.answer}>{unit.answer}</label>
      </div>
    )
  })

  return data;
}

export default CheckBox;