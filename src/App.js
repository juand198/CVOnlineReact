import React from 'react';
import {
  HashRouter as Router,
  Route
} from "react-router-dom";
import './App.css';
import Main from './screens/main'
import Portafolio from './screens/Portafolio'

function App() {  

  return (
    <Router>
      <Route exact path="/" component={Main}></Route>
      <Route exact path="/portafolio" component={Portafolio}></Route>
    </Router>  
  );
}

export default App;
