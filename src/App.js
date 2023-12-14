import React, { Component } from "react";
import "./styles.css";
import image from "./camera1.jpg";

class App extends Component {
  constructor(props) {
    super(props);
    // this.componentDidMount();
    this.state = {
      name: "",
      email: "",
      mobile: "",
      selfie: "",
      event_code: "",
      event_name: "",
      event_date: "",
      event_time: "",
      submitted: "hide",
    };
  }

  componentDidMount() {
    const path = window.location.pathname;
    const event = path.split("/");
    const eventId = event[event.length - 1].split("?");
    if (event.length) {
      const url =
        "https://photosharingai.pythonanywhere.com/api/event/get/" +
          eventId[0] ?? event.pop();
      fetch(
        url,
        // "https://jsonplaceholder.typicode.com/todos/1",
        {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          // if (data != undefined) {
          this.setState({ event_code: data.events.event_code });
          this.setState({ event_date: data.events.event_date });
          this.setState({ event_name: data.events.event_name });
          this.setState({ event_time: data.events.event_time });
          // }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  sendValues = () => {
    const url = "https://photosharingai.pythonanywhere.com/api/upload/";
    const formData = new FormData();
    formData.append("name", this.state.name);
    formData.append("email", this.state.email);
    formData.append("mobile", this.state.mobile);
    formData.append("selfie", this.state.selfie);
    console.log(formData);
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => this.setState({ submitted: "show" }))
      .catch((err) => console.log(err));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      name: e.target.Name.value,
      email: e.target.Email.value,
      mobile: e.target.MobileNumber.value,
      selfie: e.target.Selfie.value,
    });
    this.sendValues();
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <div className="header-logo">
            <h3>{this.state.event_name}</h3>
          </div>
          <div className="event">
            <h4>{this.state.event_name}</h4>
            <h5>{this.state.event_date}</h5>
          </div>
        </div>
        <div className="form-submit">
          <h3 className={this.state.submitted}>
            Thanks for your submission. You will receive a message on successful
            generation.
          </h3>
        </div>
        <form
          onSubmit={(e) => {
            this.handleSubmit(e);
          }}
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          <div className="form-content">
            <label>
              Name:
              <input
                type="text"
                name="Name"
                onChange={(e) => this.setState({ name: e.target.value })}
              />
            </label>
            <label>
              Email Address:
              <input
                type="email"
                name="Email"
                onChange={(e) => this.setState({ email: e.target.value })}
              />
            </label>
            <label>
              Mobile Number:
              <input
                type="number"
                name="MobileNumber"
                min="1111111111"
                max="9999999999"
                onChange={(e) => this.setState({ mobile: e.target.value })}
              />
            </label>
            <label>
              Selfie:
              <input
                type="file"
                name="Selfie"
                accept="image/*"
                capture="camera"
                onChange={(e) => this.setState({ selfie: e.target.files[0] })}
              />
            </label>
            <input type="submit" className="submit" value="Submit" />
          </div>
        </form>
        <div className="footer">Our Logo Contact Info</div>
      </div>
    );
  }
}

export default App;
