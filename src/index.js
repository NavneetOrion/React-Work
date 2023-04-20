import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AboutPage  from './AboutPage';
import Image from './Image';
import Embedding from './Embedding';
import DisplayingData from './DisplayingData';
import Condition from './Condition';
import Tick from './Tick';
import Props from './Props';


const comment = {
  date: new Date().toDateString(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Watch Dogs 2',
    avatarUrl: 'https://i.imgur.com/NPgB1ge_d.webp?maxwidth=520&shape=thumb&fidelity=high'
  }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
    <AboutPage />
    <Embedding/>
    <Image/>
    <DisplayingData/>
    <Condition/>
    <Tick/>
    <Props date={comment.date}
      text={comment.text}
      author = {comment.author}
    />
    
  </>
    
  
);


