import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Navegador from './components/Navegador'

function App() {
  return (
    
      <BrowserRouter className='App'>
        <Navegador/>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/Login' component={Login}/>
          </Switch>
      
      </BrowserRouter>
  )

