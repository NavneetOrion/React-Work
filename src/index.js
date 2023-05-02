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
import Events from './Events';
import Hooks from './Hooks';
import Forms from './Forms';
import NewForm from './NewForm';
import Counter from './Counter';
import Temp from './Temp';
import Containment from './Containment';
import Contact from './Contact';
import Chat from './Chat';
import App2 from './App2';
import {BrowserRouter} from 'react-router-dom';
import Access from './Access';
import UseEffect2 from './UseEffect2';

import UseEffect3 from './UseEffect3';
import UseEffect4 from './UseEffect4';
import FetchAPI from './FetchAPI';
import FetchApi2 from './FetchApi2';
import UseContext from './UseContext';
import UseRef from './UseRef';
import UseMemo from './UseMemo';


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
    <Embedding />
    <Image />
    <DisplayingData/>
    <Condition/>
    <Tick/>
    <Props  
    date={comment.date}
      text={comment.text}
      author = {comment.author}
    />
    <Events/>
    <Hooks/>
    <Forms/>
    <NewForm/>
    <Counter/>
    <Temp/>
    <Containment
      left={<Contact/>}
      right={<Chat/>}
    />

    <BrowserRouter>
    <App2/>
    </BrowserRouter>

    <Access/>
    <UseEffect2/>
    <UseEffect3/>
    <UseEffect4/>
    <FetchAPI/>
    <FetchApi2/>

    <UseContext/>
    <UseRef/>
    <UseMemo/>
    
    
  </>
    
  
);


