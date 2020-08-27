/* eslint-disable react/jsx-pascal-case */
import React, {useMemo} from "react";
import "./styles.css";

import Left_container from './components/left_container'
import Right_container from './components/right_container'

 

function Login() {
  
  const memoizodLeft = useMemo(()=><Left_container/>, [])


  return (
    <div className="main-container">
      
      {memoizodLeft}
      <Right_container/>
      
    </div>
  );
}

export default Login;