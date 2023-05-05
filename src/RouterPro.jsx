import React from 'react'
import { BrowserRouter as Router,Link,Route,Routes } from 'react-router-dom'
import Stopwatch from './Stopwatch'
import Hooks from './Hooks'

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
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path='/stopwatch' Component={Stopwatch}></Route>

        <Route path='/Hooks' Component={Hooks}></Route>
      </Routes>
    </Router>
  )
}

export default RouterPro;
