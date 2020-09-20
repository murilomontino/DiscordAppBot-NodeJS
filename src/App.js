import React from "react";
import 'fontsource-roboto'
import "./assets/styles/global.css";
import Routers from "./routers";
import ContextAuthProvider from "./context/ContextAuthentication";
import ContextRouterProvider from './context/ContextRouter'

const Store = window.require('electron-store')
const store = new Store()
document.store = store

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
