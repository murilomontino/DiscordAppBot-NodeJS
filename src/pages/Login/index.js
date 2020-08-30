/* eslint-disable react/jsx-pascal-case */
import React, {useMemo} from "react";
import "./styles.css";

import Left_container from './components/left_container'
import Right_container from './components/right_container'

import ContextAuthProvider from '../../context/ContextAuth/'

function Login() {
  
  const memoizodLeft = useMemo(()=><Left_container/>, [])


  return (
    <div className="main-container">
      
      {memoizodLeft}
      <ContextAuthProvider>
        <Right_container/>
      </ContextAuthProvider>
      
      
    </div>
  );
}

export default Login;