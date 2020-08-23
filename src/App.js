import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Main from "./pages/Main";
import './assets/styles/global.css';


function App() {
  
  return (
    <div className='App'>
    <BrowserRouter>
      <Switch>
        <Route path="/Main" exact component={Main} />
        <Route path="/" component={Login} />
      </Switch>
    </BrowserRouter>
    </div>
  )
}

export default App