import React, { Component } from "react";
import "../Css/Navbar.css";
import { Route, NavLink, HashRouter, Switch, Redirect } from "react-router-dom";

// importing different components for navbar use
import Home from "../Pages/Home.js";
import Data from "../Pages/Data";
import Designs from "../Pages/Designs.js";
import Cv from "../Pages/CV.js";

class Nav extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <nav>
            <ul className="bgs">
              <li>
                <NavLink exact to="/Home" component={Home}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/Data" component={Data}>
                  Repositories
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/Cv" component={Cv}>
                  CV
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/Designs" component={Designs}>
                  Designs/Photography
                </NavLink>
              </li>
              <li>
                <a href="https://mikifriki.github.io/Forecast/" title="Wanna see the weather?">
                  Weather<sup className="newSup">new</sup>
                </a>
              </li>
            </ul>

          </nav>

          <Switch>
            <Route exact path="/Home" component={Home} />
            <Route path="/Data" component={Data} />
            <Route path="/Cv" component={Cv} />
            <Route path="/Designs" component={Designs} />
            <Redirect exact from="/" to="/Home" />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default Nav;
