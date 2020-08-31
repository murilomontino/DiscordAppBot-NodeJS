import React from 'react'

import './assets/styles/global.css';
import Routers from './routers'
import ContextAuthProvider from './context/ContextAuthentication'

export default () => {
  return (
    <div className='App'>
    <ContextAuthProvider>
      <Routers history={history}/>
    </ContextAuthProvider>
    </div>
  )
}