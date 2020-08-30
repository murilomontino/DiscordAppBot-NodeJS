/* eslint-disable react/jsx-pascal-case */
import React from "react"

import "./styles.css"

import LeftContainer from './components/left_container'
import RightContainer from './components/right_container'

import ContextAuthProvider from '../../context/ContextAuth'

export default () => {
  return (
    <div className="main-container">
      
      <LeftContainer/>
      <ContextAuthProvider>
        <RightContainer />
      </ContextAuthProvider>
      
      
    </div>
  );
}