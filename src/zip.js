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
  render() {
    return (
      <div className="container">
        <form>
          <h1>Enter Zip</h1>
          <div
            id="inputField"
            className="input-group lg">
            <input aria-label="Large" aria-describedby="inputGroup-sizing-sm" className="form-control" name="zip" placeholder="Zip Code" onChange={this.change}></input>
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
