import React from "react";

import "./assets/styles/global.css";
import Routers from "./routers";
import ContextAuthProvider from "./context/ContextAuthentication";
import ContextProfileProvider from "./context/ContextProfile";

export default () => {
  return (
    <div className="App">
      <ContextAuthProvider>
        <ContextProfileProvider>
          <Routers />
        </ContextProfileProvider>
      </ContextAuthProvider>
    </div>
  );
};
