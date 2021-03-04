import React from 'react';
import './CheckBox.css';

const CheckBox = ({test, index, handleCheckBoxInput, handleInputChange}) => {

  const data = test.answers.map((unit, idx) => {
    return (
      <div className="container-checkbox" key={idx}>
        <input
          type="checkbox"
          name={index}
          value={unit.answer}
          onChange={handleInputChange}
          id={`chbx-card${index + 1}-answer${idx + 1}`}
        />
        <label 
          htmlFor={`chbx-card${index + 1}-answer${idx + 1}`}
        >
          {unit.answer}
        </label>
      </div>
    )
  })

  return data;
}

export default CheckBox;