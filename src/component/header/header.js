import React, { Component } from "react";
import { Link } from "react-router-dom";
class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <nav
            className="navbar navbar-default navbar-fixed-top"
            role="navigation"
          >
            <div className="container-fluid">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target="#navbar-collapse"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
                <Link className="navbar-brand" to={"/"}>
                  LOGO
                </Link>
              </div>
              <div id="navbar-collapse" className="collapse navbar-collapse">
                <ul className="nav navbar-nav navbar-right">
                  <li className="dropdown">
                    <ul
                      className="dropdown-menu dropdown-menu-flag"
                      role="menu"
                    >
                      <li>
                        <Link to={"/"}>
                          <img
                            src="http://www.country-dialing-codes.net/img/png-country-4x2-flat-res-640x480/gf.png"
                            alt=""
                            width="28px"
                            height="18px"
                          />
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <Link
                      id="user-profile"
                      to={"/"}
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      {" "}
                      <img
                        alt=""
                        src={process.env.PUBLIC_URL + "/profile/profile.png"}
                      />{" "}
                      Sofiane May
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
