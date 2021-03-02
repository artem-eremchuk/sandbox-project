import React from 'react';
import CheckBox from '../CheckBox/CheckBox';
import TextArea from '../TextArea/TextArea';
import RadioButton from '../RadioButton/RadioButton';

const AnswersField = (props) => {
  const {
    
    test, 
    index, 
    typeOfAnswer, 
    handleTextArea,
    handleRadioButton,
    handleCheckBoxInput
  } = props;

  if (typeOfAnswer === 'checkbox'){
    return (
      <CheckBox 
        test={test} 
        handleCheckBoxInput={handleCheckBoxInput}
      />
    );
  }
  else if (typeOfAnswer === 'radiobutton'){
    return (
      <RadioButton 
        test={test} 
        index={index} 
        handleRadioButton={handleRadioButton}
      />
    );
  }

  return (
    <TextArea 
      index={index} 
      handleTextArea={handleTextArea} 
    />
  );
};

export default AnswersField;