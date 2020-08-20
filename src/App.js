import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './assets/styles/global.css';

import Login from './pages/Login'
import Main from './pages/Main'
import Navegador from './components/menuBar/Navegador'

function App() {
  return (
    
      <BrowserRouter className='App'>
         <Navegador/>
          <Switch>
            <Route path='/' exact component={Main} />
            <Route path='/Login' component={Login} />
          </Switch>
      
      </BrowserRouter>
  )
}

export default App