import React, { Component } from "react";
import Header from "./Header";
import sha256 from 'crypto-js/sha256'

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studio: "",
            name: "",
            address: "",
            email: "",
            mobile: "",
            password: "",
            submitted: "hide",
            same: true
        };
    }
    confirmPassword = (e) =>{
        console.log(e.target.value);
        console.log(this.state.password)
        if (this.state.password != e.target.value) {
            this.setState({same: false})
        }
        else {
            this.setState({same: true})
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.sendValues();
    };
    sendValues = () => {
        const url = "https://photosharingai.pythonanywhere.com/api/register/";
        const body = {
            'studio': this.state.studio,
            'name': this.state.name,
            'address': this.state.address,
            'email': this.state.email,
            'mobile': this.state.mobile,
            'password': sha256(this.state.password)
        }
        fetch(url, {
          method: "POST",
          body: JSON.stringify(body),
        })
          .then((response) => response.json())
          .then((data) => this.setState({ submitted: "show" }))
          .catch((err) => console.log(err));
      };

    render() {
        return (
        <div className="sign-up">
            <Header />
            <div className="form-submit">
          <h3 className={this.state.submitted}>
            Thanks for your registration!
          </h3>
        </div>
        <form
          onSubmit={(e) => {
            this.handleSubmit(e);
          }}
        >
          <div className="form-content">
            <label>
              Studio Name:
              <input
                type="text"
                name="studio"
                onChange={(e) => this.setState({ studio: e.target.value })}
              />
            </label>
            <label>
              Owner Name:
              <input
                type="text"
                name="name"
                onChange={(e) => this.setState({ name: e.target.value })}
              />
            </label>
            <label>
              Studio Address:
              <input
                type="textarea"
                name="address"
                onChange={(e) => this.setState({ address: e.target.value })}
              />
            </label>
            <label>
              Email Address:
              <input
                type="email"
                name="email"
                onChange={(e) => this.setState({ email: e.target.value })}
              />
            </label>
            <label>
              Mobile Number:
              <input
                type="number"
                name="mobile"
                min="1111111111"
                max="9999999999"
                onChange={(e) => this.setState({ mobile: e.target.value })}
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                name="password"
                min="1111111111"
                max="9999999999"
                onChange={(e) => this.setState({ password: e.target.value })}
              />
            </label>
            <label>
              Confirm Password:
              <input
                type="password"
                name="password"
                min="1111111111"
                max="9999999999"
                onChange={(e) => this.confirmPassword(e)}
              />
              {this.state.same == false ? 
              <p style={{color: "red"}}>Password not same</p> : ''}
            </label>
            <input type="submit" className="submit" value="Submit" />
          </div>
        </form>

        </div>);
    }
}
export default SignUp;