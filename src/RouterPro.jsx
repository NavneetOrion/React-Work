import React from 'react'
import { BrowserRouter as Router,Link,Route,Routes } from 'react-router-dom'
import Stopwatch from './Stopwatch'
import Hooks from './Hooks'
import Tick from './Tick';
import Condition from './Condition';
import CustomHooks from './CustomHooks';
import UseCallback from './UseCallback';
import AgeChecker from './AgeChecker';
import UseReducer from './UseReducer';
import UseRef from './UseRef';
import UseRef2 from './UseRef2';
import UseMemo from './UseMemo';
import UseContext from './UseContext';
import FetchAPI from './FetchAPI';
import UseEffect2 from './UseEffect2';
import UseEffect3 from './UseEffect3';
import UseEffect4 from './UseEffect4';
import Access from './Access';
import Temp from './Temp';
import Counter from './Counter';
import NewForm from './NewForm';
import Forms from './Forms';
import Events from './Events';
import DisplayingData from './DisplayingData';
import Embedding from './Embedding';
import Image from './Image';
import AboutPage  from './AboutPage';
import App from './App';



const RouterPro = () => {

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/stopwatch">Stopwatch</Link>
            </li>
            <li>
              <Link to="/Hooks">Hooks</Link>
            </li>
            <li>
              <Link to="/Tick">Time Grabber</Link>
            </li>
            <li>
              <Link to="/Condition">Conditional Rendering</Link> 
            </li>
            <li>
              <Link to="/CustomHooks">Created own Hook</Link>
            </li>
            <li>
              <Link to="/UseCallBack">CallBack Hook</Link>
            </li>
            <li>
              <Link to="/AgeChecker">Age Checker Program</Link>
            </li>
            <li>
              <Link to="/UseReducer">Use Reducer Hook Counter</Link>
            </li>
            <li>
              <Link to="/UseRef">UseRef Hook</Link>
            </li>
            <li>
              <Link to="/UseRef2">Example 2 of UseRef</Link>
            </li>
            <li>
              <Link to="/UseMemo">UseMemo Hook</Link>
            </li>
            <li>
              <Link to="/UseContext">UseContext Hook</Link>
            </li>
            <li>
              <Link to="/FetchApi">Fetch API Example</Link>
            </li>
            <li>
              <Link to="/UseEffect2">UseEffect Example 1</Link>
            </li>
            <li>
              <Link to="/UseEffect3">UseEffect Example 2</Link>
            </li>
            <li>
              <Link to="/UseEffect4">UseEffect Example 3</Link>
            </li>
            <li>
              <Link to="/Access">Access</Link>
            </li>
            <li>
              <Link to="/Temp">Temp</Link> 
            </li>
            <li>
              <Link to="/Counter">Normal Counter</Link>
            </li>
            <li>
              <Link to="/NewForm">Advance Form with Div</Link>
            </li>
            <li>
              <Link to="/Form">Basic Form</Link>
            </li>
            <li>
              <Link to="/Events">Basic Events</Link>
            </li>
            <li>
              <Link to="/Display">Displaying Basic Data</Link>
            </li>
            <li>
              <Link to="/Embedding">Embedding Data</Link>
            </li>
            <li>
              <Link to="/Image">Basic Image</Link>
            </li>
            <li>
              <Link to="/About">Basic About Page</Link>
            </li>
            <li>
              <Link to="/App">Basic App with Simple Button</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path='/stopwatch' Component={Stopwatch}></Route>
        <Route path='/Hooks' Component={Hooks}></Route>
        <Route path='/Tick'  Component={Tick}></Route>
        <Route path='/Condition' Component={Condition}></Route>
        <Route path='/CustomHooks' Component={CustomHooks}></Route>
        <Route path='/UseCallBack' Component={UseCallback}></Route>
        <Route path='/AgeChecker' Component={AgeChecker}></Route>
        <Route path='/UseReducer' Component={UseReducer}></Route>
        <Route path='/UseRef' Component={UseRef}></Route>
        <Route path='/UseRef2' Component={UseRef2}></Route>
        <Route path='/UseMemo' Component={UseMemo}></Route>
        <Route path='/UseContext' Component={UseContext}></Route>
        <Route path='/FetchApi' Component={FetchAPI}></Route>
        <Route path='/UseEffect2' Component={UseEffect2}></Route>
        <Route path='/UseEffect3' Component={UseEffect3}></Route>
        <Route path='/UseEffect4' Component={UseEffect4}></Route>
        <Route path='/Access' Component={Access}></Route>
        <Route path='/Temp' Component={Temp}></Route>
        <Route path='/Counter' Component={Counter}></Route>
        <Route path='/NewForm' Component={NewForm}></Route>
        <Route path='/Form' Component={Forms}></Route>
        <Route path='/Events' Component={Events}></Route>
        <Route path='/Display' Component={DisplayingData}></Route>
        <Route path='/Embedding' Component={Embedding}></Route>
        <Route path='/Image' Component={Image}></Route>
        <Route path='/About' Component={AboutPage}></Route>
        <Route path='/App' Component={App}></Route>
      </Routes>
    </Router>
  )
}

export default RouterPro;
