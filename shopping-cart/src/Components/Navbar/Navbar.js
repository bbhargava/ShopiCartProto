import React, { Component } from 'react';
import './Navbar.css';
import logo from './../Gallery/logo.PNG'
export default class NavigationBar extends Component {

  render() {
    return (
      <div class="topnav">
        <div className="block-1">
        <a href="/Home">
          <img alt = "brandLogo" className="brand-logo" src={logo} />
          </a>
          </div>
        <div class="topnav-right">
          <a href="/Login">Login</a>
          <a href="/SignUp">Sign-Up</a>
        </div>
      </div>

    );
  }

}
