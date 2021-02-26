import React from 'react';
import './App.css';
import QuestionCard from './components/QuestionCard/QustionCard';

// Выбрать способ ответа на вопросы 
const typeOfAnswer = 'radiobutton';
// checkbox // radiobutton // textarea

// База вопросов с ответами
const tests = [
  {
    question: 'You hear a woman talking about her job. How does she feel about it?',
    answer1: 'It’s boring.',
    answer2: 'She likes it.',
    answer3: 'She finds it difficult'
  },
  {
    question: 'You overhear a man telling a friend about a film he saw recently. What type of film was it?',
    answer1: 'a romance',
    answer2: 'an action film',
    answer3: 'science fiction'
  },
  {
    question: 'You hear a man telling his colleague about his holiday. What was the problem with it?',
    answer1: 'He became ill.',
    answer2: 'He argued with his partner.',
    answer3: 'He couldn’t see all the things he wanted to see.'
  }
];

function App() {
  return (
    tests.map((test, index) => {
      return (
        <QuestionCard 
          index={index}
          key={index}
          test={test} 
          typeOfAnswer={typeOfAnswer}
        />
      );
    })
  );
}

export default App;
