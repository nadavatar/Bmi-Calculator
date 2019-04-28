import React, { Component } from "react";
import Header from "./Components/Header";
import Form from "./Components/Form";
import Score from "./Components/Score";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      bmi: 0,
      showScore: false
    };
  }

  handleFormSubmit = (height, weight) => {
    const bmi = weight / (height * height);
    this.setState({
      bmi: bmi,
      showScore: true
    });
    console.log(bmi);
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Form handleFormSubmit={this.handleFormSubmit} />
        {this.state.showScore && <Score score={this.state.bmi} />}
      </div>
    );
  }
}
