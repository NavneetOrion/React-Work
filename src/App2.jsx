import React from 'react';
import {Route,Routes} from 'react-router-dom';
import Abbout from './Abbout';
import CContact from './CContact';

const App2 = () =>{
    return <>
        <Routes>
            <Route path="/" Component={Abbout}/>
            <Route path="/contact" Component={CContact}/>
        </Routes>
    </>
    

    

}

export default App2;