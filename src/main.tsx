import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import MCquestion from './MCquestion';
import Example from './example.mdx'
import './linkedLists.css';
import { Question } from './types';
import LinkedLists from './linkedLists.mdx';
import LinkedList from './linkedList.mdx'
import CodeBlock from './CodeBlock';

const App1 = () => {
  return <h1>Hello, World!</h1>;
};

const capitalOfFranceQuestion: Question = {
  question: 'What is the capital of France?',
  options: ['London', 'Berlin', 'Paris', 'Madrid'],
  answerIndex: 2,
  answerExplanation: 'Paris is the capital of France.'
};

//wrapper component for all components.
const Wrapper = () => (
  <>
    <CodeBlock>int main</CodeBlock>
    <LinkedList/>
    <App />
    <App1 />
    <LinkedLists />

    <Example />

    <MCquestion question={capitalOfFranceQuestion} />
  </>
);


//renders the wrapper component
const targetContainer = document.getElementById('root');
if (targetContainer) {
  const root = createRoot(targetContainer);

  root.render(<Wrapper />);

} else {
  console.error('Could not find targetContainer!');
}

console.log("hi");

