/* eslint-disable react/jsx-pascal-case */
import React,  {useState} from "react";

import "./styles.css";

import Left_container from './components/left_container'
import Right_container from './components/right_container'

import ContextAuthProvider from '../../context/ContextAuth/'

function Login() {
     
  return (
    <div className="main-container">
      
      <Left_container/>
      <ContextAuthProvider>
        <Right_container />
      </ContextAuthProvider>
      
      
    </div>
  );
}

export default Login;