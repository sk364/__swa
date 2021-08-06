import React from 'react';
import { HashRouter, Route } from "react-router-dom";

import Home from "./home";
import Page1 from "./page1";
import Page2 from "./page2";
import { p } from "./constants";

const App = () => {
  const item = localStorage.getItem("p");
  if (!item || item !== btoa(p)) return null;
  return (
    <HashRouter basename="/">
      <Route exact path="/" component={Home} />
      <Route exact path="/page1" component={Page1} />
      <Route exact path="/page2" component={Page2} />
    </HashRouter>
  );
}

export default App;
