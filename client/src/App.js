import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Manager from "./pages/Manager";
import NewVolunteer from "./components/NewVolunteer";
import VolunteerList from "./components/VolunteerList";
import Sidebar from "./components/Sidebar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./App.css";

const App = () => (
  <Router>
    <div>
    <Nav/>
      <Switch>
        {/* {/* <Route exact path="/" component={Signup} /> */}
        <Route exact path="/signup" component={Signup} /> 
        <Route exact path="/sidebar" component={Sidebar} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Manager} />
        <Route exact path="/manager" component={Manager} />
        <Route exact path="/new/volunteer" component={NewVolunteer} />
        <Route exact path="/volunteer/list" component={VolunteerList} />
        <Route exact path="/manager/volunteer/:id" component={Detail} />
        <Route component={NoMatch} />
      </Switch>
     <Footer/> 
    </div>
  </Router>
);

export default App;
