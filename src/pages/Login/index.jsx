/* eslint-disable react/jsx-pascal-case */
import React from "react"

import "./styles.css"

import LeftContainer from './components/left_container'
import ContainerInputLogin from './components/ContainerInputLogin'

export default () => {
  return (
    <div className="main-container">
      
      <LeftContainer/>
      <ContainerInputLogin/>
      
      
      
    </div>
  );
}