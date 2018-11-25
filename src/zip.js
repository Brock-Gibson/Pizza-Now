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
      <Container>
        <form>
          <h3>Enter your Zip Code below to find Pizza Now!</h3>
          <div id="inputField" className="input-group mb-3">
            <input name="zip" placeholder="Zip Code" onChange={this.change} />
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
      </Container>
    );
  }
}

export default Zip;
