import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { ListGroup, ListGroupItem ,Container} from "reactstrap";
import "./App.css";
import Header from "./Header.jsx"

class Details extends Component {
  constructor() {
    super();
    this.state = {
      details: {}
    };
  }
  componentDidMount() {
    const url =
      "https://xqgy0d8a3l.execute-api.us-east-1.amazonaws.com/Prod/details/" +
      this.props.place_id;
    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(res => {
        console.log(res.result);
        let details = res.result;
        if (details) {
          this.setState({
            website: details.website,
            phone: details.international_phone_number,
            address: details.formatted_address,
            name: details.name,
            hours: details.opening_hours.weekday_text.map(item => {
              return (
                <div>
                  <p>{item}</p>
                </div>
              );
            }),
            open: details.opening_hours.open_now ? "open" : "closed"
          });
          console.log("state", this.state.details);
        }
      })
      .then();
  }
  render() {
    if (typeof this.props.zip === "undefined") {
      return <Redirect to="/" />;
    }
    //  if (this.state.hours !== undefined) {
    //    hours = this.state.hours.map(item => {
    //      return (
    //        <div>
    //          <p>{item}</p>
    //          <br />
    //        </div>
    //      );
    //    });
    // }
    return (
      <Container>
      <Header/>
        <Link to="/"> Link back to enter another zip</Link>
        <br />
        <h1>{this.state.name}</h1>
        <a href={this.state.website}>{this.state.website}</a>
        <h1>{this.state.phone}</h1>
        <p>{this.state.address}</p>
        <p>Open/Closed:{this.state.open}</p>
        <h5>HOURS</h5>
        {this.state.hours}
      </Container>
    );
  }
}

export default Details;
