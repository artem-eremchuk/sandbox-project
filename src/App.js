import React from 'react';
import './App.css';
import QuestionCard from './components/QuestionCard/QustionCard';
class App extends React.Component {
  state = {
    tests: [
      {
        answerType: 'checkbox',
        question: 'You hear a woman talking about her job. How does she feel about it?',
        answers: [
          {
            answer: 'It’s boring.',
            isSelected: false
          },
          {
            answer: 'She wrong it.',
            isSelected: false
          },
          {
            answer: 'She doiesn\'t likes it.',
            isSelected: false
          },
          {
            answer: 'She very likes it.',
            isSelected: false
          },
          {
            answer: 'It isn\'t boring.',
            isSelected: false
          }
        ]
      },
      {
        answerType: 'checkbox',
        question: 'You hear a woman talking about her job. How does she feel about it?',
        answers: [
          {
            answer: 'It’s boring.',
            isSelected: false
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
        answerType: 'radiobutton',
        question: 'You overhear a man telling a friend about a film he saw recently. What type of film was it?',
        answers: [
          {
            answer: 'a romance',
            isSelected: true
          },
          {
            answer: 'misic',
            isSelected: true
          },
          {
            answer: 'film',
            isSelected: false
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
        answerType: 'radiobutton',
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
        answerType: 'textarea',
        question: 'You hear a man telling his colleague about his holiday. What was the problem with it?',
        answers: [
          {
            answer: ''
          }
        ]
      },
      {
        answerType: 'textarea',
        question: 'You hear a man telling his colleague about his holiday. What was the problem with it?',
        answers: [
          {
            answer: ''
          }
        ]
      }
    ]
  }

  // Общий метод для checkbox / radiobutton / textarea 
  // для получение информации и изменения state
  handleInputChange = (event) => {
    const { name } = event.target;
    const data = this.state.tests;

    const cardAnswers = data[name].answers;

    const selectedInput = cardAnswers
      .find(el => el.answer === event.target.value);

    const selectedInputIdx = cardAnswers
      .indexOf(selectedInput);

    if (event.target.type === 'textarea'){
      data[name].answers.answer = event.target.value;
    }
    else {
      cardAnswers.forEach((answer, index) => {
        if (event.target.type === 'checkbox'){
          if (index === selectedInputIdx) {
            answer.isSelected = !selectedInput.isSelected;
          }
        }
        else if (event.target.type === 'radio'){
          (index === selectedInputIdx) 
          ? answer.isSelected = !selectedInput.isSelected
          : answer.isSelected = false;
        }
      })
    }

    this.setState({
      tests: data
    })

    console.log(this.state.tests)
  }

  // Отдельные методы для checkbox / radiobutton / textarea 
  handleCheckBoxInput = (event) => {
    const { name } = event.target;
    const data = this.state.tests;

    const cardAnswers = data[name].answers;

    const selectedInput = cardAnswers
      .find(el => el.answer === event.target.value);

    const selectedInputIdx = cardAnswers
      .indexOf(selectedInput);

    cardAnswers.forEach((answer, index) => {
      if (index === selectedInputIdx) {
        answer.isSelected = !selectedInput.isSelected;
      }
    })

    this.setState({
      tests: data
    })

    console.log(this.state.tests)
    // console.log(event.target.attributes.id.value)
    // console.log(this.state.tests[name].answers)
  }

  handleRadioButton = (event) => {
    const { name } = event.target;
    const data = this.state.tests;

    const cardAnswers = data[name].answers;

    const selectedInput = cardAnswers
      .find(el => el.answer === event.target.value);

    const selectedInputIdx = cardAnswers
      .indexOf(selectedInput);

    cardAnswers.forEach((answer, index) => {
      (index === selectedInputIdx) 
      ? answer.isSelected = !selectedInput.isSelected
      : answer.isSelected = false;
    })

    this.setState({
      tests: data
    })
    
    // console.log(event.target.attributes.id.value)
    // console.log(this.state.tests[name].answers)
  }

  handleTextArea = (event) => {
    const { name } = event.target;
    const data = this.state.tests;

    data[name].answers.answer = event.target.value;

    this.setState({
      tests: data
    })

    // console.log(this.state.tests)
  }

  render(){
    return (
      this.state.tests.map((test, index) => {
        return (
          <QuestionCard 
            key={index}
            test={test} 
            index={index}
            handleTextArea={this.handleTextArea}
            handleRadioButton={this.handleRadioButton}
            handleCheckBoxInput={this.handleCheckBoxInput}
            handleInputChange={this.handleInputChange}
          />
        );
      })
    );
  }
}

export default App;
