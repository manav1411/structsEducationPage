import React from 'react';
import { createRoot } from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import CodeBlock from './CodeBlock';
import Roadmap from './Roadmap'

//need to import all edu and quiz files. TODO: make this dynamic.
import LinkedLists from './edu_pages/linkedLists.mdx';
import LinkedListsQuiz from './quiz_pages/linkedListsQuiz.mdx';

//renders the main component(s).
const targetContainer = document.getElementById('root');
if (targetContainer) {
  const root = createRoot(targetContainer);
  root.render(  <>
    <BrowserRouter>
      <Routes>
        <Route path="/codeBlock_temp" element= {<CodeBlock>int main</CodeBlock>} />
        <Route path="/linkedLists" element= {<LinkedLists />} />
        <Route path="/linkedListsQuiz" element= {<LinkedListsQuiz />} />
        <Route path="/roadmap" element= {<Roadmap />} />
      </Routes>
    </BrowserRouter>
  </>);
} else {
  console.error('Could not find targetContainer!');
}