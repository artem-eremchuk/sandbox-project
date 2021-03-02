import React from 'react';
import './App.css';
import QuestionCard from './components/QuestionCard/QustionCard';

// Выбрать способ ответа на вопросы 
const typeOfAnswer = 'checkbox';
// checkbox // radiobutton // textarea
class App extends React.Component {
  state = {
    tests: [
      {
        question: 'You hear a woman talking about her job. How does she feel about it?',
        answers: [
          {
            answer: 'It’s boring.',
            isSelected: true
          },
          {
            answer: 'She likes it.',
            isSelected: false
          },
          {
            answer: 'It isn\'t boring.',
            isSelected: false
          }
        ]
      },
      {
        question: 'You overhear a man telling a friend about a film he saw recently. What type of film was it?',
        answers: [
          {
            answer: 'a romance',
            isSelected: true
          },
          {
            answer: 'an action film',
            isSelected: false
          },
          {
            answer: 'science fiction',
            isSelected: false
          }
        ]
      },
      {
        question: 'You hear a man telling his colleague about his holiday. What was the problem with it?',
        answers: [
          {
            answer: 'He became ill.',
            isSelected: true
          },
          {
            answer: 'He argued with his partner.',
            isSelected: false
          },
          {
            answer: 'He couldn’t see all the things he wanted to see.',
            isSelected: false
          }
        ]
      }
    ]
  }

  handleCheckBoxInput = (event) => {
    console.log(event.target.value)
  }

  handleRadioButton = (event) => {
    console.log(event.target.value)
  }

  handleTextArea = (event) => {
    console.log(event.target.value)
  }

  render(){
    return (
      this.state.tests.map((test, index) => {
        return (
          <QuestionCard 
            key={index}
            test={test} 
            index={index}
            typeOfAnswer={typeOfAnswer}
            handleTextArea={this.handleTextArea}
            handleRadioButton={this.handleRadioButton}
            handleCheckBoxInput={this.handleCheckBoxInput}
          />
        );
      })
    );
  }
}

export default App;
