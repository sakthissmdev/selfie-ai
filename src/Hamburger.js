import React, { Component } from "react";
import image from "./logo.png";

class Hamburger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hamburgerOpen: false,
    };
  }
  render() {
    return (
      <div className="hamburger-wrapper">
        <div className="hamburger-menu">
          <a
            href="#"
          >
            <svg
              className= {this.state.hamburgerOpen ? "hide" : "show"}
              focusable="false"
              width="36"
              height="24"
              viewBox="0 0 36 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              data-once="region--header"
              onClick={() => this.setState({hamburgerOpen: true})}
            >
              <path
                d="M34.7143 3.42859H1.28571"
                stroke="white"
                strokeWidth="1.71429"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M34.7143 12H1.28571"
                stroke="white"
                strokeWidth="1.71429"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M34.7143 20.5715H1.28571"
                stroke="white"
                strokeWidth="1.71429"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <svg
              className= {this.state.hamburgerOpen ? "show" : "hide"}
              focusable="false"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              data-once="region--header"
              onClick={() => this.setState({hamburgerOpen: false})}
            >
              <path
                d="M26.7379 9.07458L9.09512 26.6954"
                stroke="white"
                strokeWidth="1.71429"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M9.14938 9.02039L26.7922 26.6412"
                stroke="white"
                strokeWidth="1.71429"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </a>
          <ul className={this.state.hamburgerOpen ? "show-hamburger" : "hide"}>
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
              <a href="/login">Login</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Hamburger;
