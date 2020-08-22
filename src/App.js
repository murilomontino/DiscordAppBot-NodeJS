import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navegador from './components/menuBar'
import Login from "./pages/Login";
import Main from "./pages/Main";
import './assets/styles/global.css';


function App() {
  return (
    <div className="App"> 
    <BrowserRouter>
      {/* <Navegador/> */}
      <Switch>
        <Route path="/Login" exact component={Login} />
        <Route path="/" component={Main} />
      </Switch>
    </BrowserRouter>
    </div> 
  )
}

export default App