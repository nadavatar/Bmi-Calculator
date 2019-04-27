import React, { Component } from "react";
import Header from "./Components/Header";
import Form from "./Components/Form";
import Score from "./Components/Score";

export default class App extends Component {
  constructor() {
    super();
    this.state = 0;
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Form />
        {/* <Score score={this.state} /> */}
      </div>
    );
  }
}
