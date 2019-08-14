import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Filter from "./component/filter/filter";
import Header from "./component/header/header";
import SideBar from "./component/sidebar/sidebar";
import Dummy from "./component/dummy/dummy";
import Home from "./component/home/home";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <div id="wrapper">
            <SideBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/apartments" component={Filter} />
              <Route path="/test" component={Dummy} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
