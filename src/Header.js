import React, { Component } from "react";
import image from "./logo.png";
import Hamburger from "./Hamburger.js";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="header-wrapper">
        <div className="logo">
          <img src={image}></img>
        </div>
        <Hamburger />
        <div className="menu">
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/pricing">Pricing</a>
            </li>
            <li>
              <a href="/how-it-works">How it Works</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/register">Register</a>
            </li>
            <li>
            
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Header;
