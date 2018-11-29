import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Container} from "reactstrap";


import "./App.css";

class Zip extends Component {
  change = e => {
    var num = e.target.value.replace(/-*\D/gi, "");

    var num2 = num.replace(/\d{5}(?=(?:\d{1})+$)/gm, "$&-");
    console.log();
    this.props.onChange({ [e.target.name]: num2 });
  };

  constructor() {
    super();
    this.getZip = this.getZip.bind(this);
    this.state = {
      zip: ""
    };
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getZip);
    }
  }

  getZip(position) {
    const lng = position.coords.longitude;
    const lat = position.coords.latitude;
    const key = 'AIzaSyCkxlsEbGDbFpHhgVHRZsDmVutacBpgEUE';

    const url =
      "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
      lat + ',' + lng + '&key=' + key;

    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(myJson => {
        let formattedAdress = myJson['results'][0]['formatted_address'];
        let addStr = JSON.stringify(formattedAdress);
        let regX = /[0-9]{5}(?!.*[0-9]{5})/
        let zipStr = regX.exec(addStr);
        console.log(zipStr[0]);
        this.setState({ zip: zipStr });
        this.props.onChange({zip: zipStr});
      });
  }

  render() {
    return (
      <div className="container">
        <form>
          <h1>Enter Zip</h1>
          <div
            id="inputField"
            className="input-group lg">
            <input aria-label="Large" aria-describedby="inputGroup-sizing-sm" className="form-control" name="zip" placeholder={this.state.zip} onChange={this.change}></input>
            <br />
            <div className="input-group-append">
              <Link to="/list">
                <button type="button" className="btn btn-warning">
                  <img src="../pizzapic.png" width="19" alt="Find Pizza!" />
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Zip;
