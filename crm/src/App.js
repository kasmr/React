import React from "react";
import { NavigationPanel } from "./components/NavigationPanel";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <NavigationPanel />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
