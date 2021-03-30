import React from "react";

import PageNavbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Logo from "./pages/Logo";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";

function Routes() {
  return (
    <Router>
      <PageNavbar />
      <Switch>
        <Route path="/" exact component={Logo}></Route>
        <Route path="/home" exact component={Home}></Route>
        <Route path="/register" exact component={Register}></Route>
        <Route path="/login" exact component={Login}></Route>
      </Switch>
    </Router>
  );
}

export default Routes;
