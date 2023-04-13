import React from 'react';
import { createRoot } from 'react-dom/client';
import { Question } from './types';
import LinkedLists from './linkedLists.mdx';
import LinkedList from './linkedList.mdx'
import CodeBlock from './CodeBlock';

//example of what props MCquestion component takes.
const capitalOfFranceQuestion: Question = {
  question: 'What is the capital of France?',
  options: ['London', 'Berlin', 'Paris', 'Madrid'],
  answerIndex: 2,
  answerExplanation: 'Paris is the capital of France.'
};
//use it like this in wrapper:
//   <MCquestion question={capitalOfFranceQuestion} />


//wrapper component for all components. can add more.
const Wrapper = () => (
  <>
    <CodeBlock>int main</CodeBlock>
    <LinkedLists />
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