import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
import Map from "./Map";
import "./App.css";
import Header from "./Header.jsx";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      zipCode: "",
      data: []
    };

    this.updateZipCode = this.updateZipCode.bind(this);
  }

  handleOnClick = zipCode => {
    this.setState({
      fetching: true
    });

    const url =
      "https://xqgy0d8a3l.execute-api.us-east-1.amazonaws.com/Prod/places/" +
      zipCode;

    if (zipCode.length === 5) {
      if (parseInt(zipCode) > 0 && parseInt(zipCode) <= 99999) {
        axios(url)
          .then(response => {
            console.log(response.data.results);
            let data = response.data.results;
            this.setState({
              haveData: true,
              fetching: false,
              data
            });
          })
          .catch(err => console.warn("Error:", err));
      }
    }
  };

  updateZipCode(evt) {
    this.setState({
      zipCode: evt.target.value
    });
  }

  handleReset = () => {
    this.setState({
      fetching: false,
      haveData: false
    });
  };

  render() {
    const { haveData, fetching, data } = this.state;
    return (
      <React.Fragment>
        <React.Fragment><Header/></React.Fragment>
        <div className="container">
          <h1 className="text-center">Pizza Now</h1>
          <h2>Your one stop shop for finding pizza near you</h2>

          <h4>Enter your zip code below to find pizza now</h4>
          <input
            placeholder="Zip Code"
            type="number"
            value={this.state.zipCode}
            onChange={evt => this.updateZipCode(evt)}
          />
          <br />
          <br />
          <button onClick={() => this.handleOnClick(this.state.zipCode)}>
            Pizza Now
          </button>
          {fetching ? <p>Loading...</p> : null}
          <ul>
            {data.map(place => (
              <React.Fragment key={place.place_id}>
                <h4>{place.name}</h4>
                <p>{place.formatted_address}</p>
                <p>
                  Rating: <strong>{place.rating} / 5</strong>
                </p>
                <hr />
              </React.Fragment>
            ))}
          </ul>
        </div>
        <br />
        <br />
      </React.Fragment>
    );
  }
}

export default App;
