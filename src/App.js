import React from "react";
import 'fontsource-roboto'
import "./assets/styles/global.css";
import Routers from "./routers";
import ContextAuthProvider from "./context/ContextAuthentication";
import ContextRouterProvider from './context/ContextRouter'

export default () => {
  return (
    <div className="App">
      <ContextAuthProvider>
        <ContextRouterProvider>
          <Routers />
        </ContextRouterProvider>
      </ContextAuthProvider>
    </div>
  );
};
