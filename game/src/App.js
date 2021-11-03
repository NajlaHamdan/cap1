import React from "react";
import { Route, Switch } from "react-router-dom";
import Menu from "./components/Menu";
import Instruction from "./components/Instruction";
import Levels from "./components/Levels";
import "./App.css";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Menu} />
        <Route exact path="/Instruction" component={Instruction} />
        <Route exact path="/gamelevel" component={Levels} />
        {/* <Route exact path="/gameeasy" component={} /> */}
        {/* <Route exact path="/gamenormal" component={} /> */}
        {/* <Route exact path="/gamehard" component={} /> */}
        {/* <Route exact path="/finishmenu" component={} /> */}
        {/* <Route exact path="*" component={NotFound} /> */}
      </Switch>
    </>
  );
};

export default App;
