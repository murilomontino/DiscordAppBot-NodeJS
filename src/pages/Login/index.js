/* eslint-disable react/jsx-pascal-case */
import React from "react";
import "./styles.css";

import Left_container from './components/left_container'
import Right_container from './components/right_container'


function Login() {
  return (
    <div class="main-container">
      
      <Left_container/>
      <Right_container/>
      
    </div>
  );
}

export default Login;