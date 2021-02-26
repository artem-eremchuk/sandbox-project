import React from 'react';
import CheckBox from '../CheckBox/CheckBox';
import RadioButton from '../RadioButton/RadioButton';
import TextArea from '../TextArea/TextArea';

const AnswersField = ({typeOfAnswer, test, index}) => {
  if(typeOfAnswer === 'checkbox'){
    return <CheckBox test={test} />
  }else if(typeOfAnswer === 'radiobutton'){
    return <RadioButton test={test} index={index}/>
  }
  return <TextArea />
};

export default AnswersField;