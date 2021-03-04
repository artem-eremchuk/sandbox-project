import React from 'react';
import CheckBox from '../CheckBox/CheckBox';
import TextArea from '../TextArea/TextArea';
import RadioButton from '../RadioButton/RadioButton';

const AnswersField = (props) => {
  const {
    test, 
    index, 
    handleTextArea,
    handleRadioButton,
    handleCheckBoxInput,
    handleInputChange
  } = props;

  if (test.answerType === 'checkbox'){
    return (
      <CheckBox 
        test={test} 
        index={index}
        handleCheckBoxInput={handleCheckBoxInput}
        handleInputChange={handleInputChange}
      />
    );
  }
  else if (test.answerType === 'radiobutton'){
    return (
      <RadioButton 
        test={test} 
        index={index} 
        handleRadioButton={handleRadioButton}
        handleInputChange={handleInputChange}
      />
    );
  }

  return (
    <TextArea 
      index={index} 
      handleTextArea={handleTextArea} 
      handleInputChange={handleInputChange}
    />
  );
};

export default AnswersField;