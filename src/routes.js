import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Main from "./pages/Main";

export default function Routes() {
  return (
    <BrowserRouter>
      {/* <Navegador/> */}

      <Route path="/" exact component={Login} />
      <Route path="/main" component={Main} />
    </BrowserRouter>
  );
}
