import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: []
    };
  }
  click = e => {
    e.persist();
    // e.preventDefault();
    console.log(e.target.name);
    this.props.onClick({ place_id: e.target.name });
  };
  componentDidMount() {
    const url =
      "https://xqgy0d8a3l.execute-api.us-east-1.amazonaws.com/Prod/places/" +
      this.props.zip;
    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data.results);
        let list = data.results.map((item, i) => {
          return (
            <div key={i}>
              <Link
                to="/details"
                onClick={this.click}
                key={i}
                name={item.place_id}
              >
                {item.name}
              </Link>
              <p>
                Rating: <strong>{item.rating} / 5</strong>
              </p>
              <p>Price: {item.price_level}</p>
              <p>
                Open/Closed: {item.opening_hours.open_now ? "open" : "closed"}
              </p>

              <br />
            </div>
          );
        });
        this.setState({ list: list });
      });
  }
  render() {
    if (typeof this.props.zip === "undefined") {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <h1>Here is a list of results</h1>
        {this.state.list}
      </div>
    );
  }
}

export default App;
