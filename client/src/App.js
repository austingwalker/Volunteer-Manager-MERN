import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Volunteers from "./pages/Volunteers";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
      <Route exact path="/" component={Signup} />
      <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/volunteers" component={Volunteers} />
        <Route exact path="/volunteers/:id" component={Detail} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
