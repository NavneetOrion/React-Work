import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AboutPage  from './AboutPage';
import Image from './Image';
import Embedding from './Embedding';
import DisplayingData from './DisplayingData';
import Condition from './Condition';
import Tick from './Tick';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
    <AboutPage/>
    <Embedding/>
    <Image/>
    <DisplayingData/>
    <Condition/>
    <Tick/>
    
  </>
    
  
);


