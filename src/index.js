import React from 'react';
import ReactDOM from 'react-dom/client';
import RouterPro from './RouterPro';
import Header from './Header';

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
    {/* <Props  
    date={comment.date}
      text={comment.text}
      author = {comment.author}
    /> */}
    
    {/* <Hooks/> */}

    {/* <Containment
      left={<Contact/>}
      right={<Chat/>}
    /> */}

    {/* <BrowserRouter>
    <App2/>
    </BrowserRouter> */}
    
    {/* <FetchApi2/> */}
    <Header/>
    <RouterPro/>
    
  </>
    
  
);


