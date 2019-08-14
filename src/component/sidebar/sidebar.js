import React, { Component } from "react";
import { Link } from "react-router-dom";
class SideBar extends Component {
  render() {
    return (
      <div>
        <div id="sidebar-wrapper">
          <aside id="sidebar">
            <ul id="sidemenu" className="sidebar-nav">
              <li>
                <Link to={"/apartments"}>
                  <span className="sidebar-title">Apartments</span>
                  <span className="sidebar-icon">
                    <i className="fa fa-home" aria-hidden="true" />
                  </span>
                </Link>
              </li>
              <li>
                <Link to={"/test"}>
                  <span className="sidebar-title">Test</span>
                  <span className="sidebar-icon">
                    <i className="fa fa-database" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    );
  }
}

export default SideBar;
