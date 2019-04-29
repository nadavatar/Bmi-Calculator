import React, { Component } from "react";
import Header from "./Components/Header";
import Form from "./Components/Form";
import Score from "./Components/Score";
import axios from "axios";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      bmi: 0,
      showScore: false
    };
  }

  handleFormSubmit = async (height, weight) => {
    // const bmi = weight / (height * height);
    const request = await axios({
      method: "get",
      url: "http://localhost:4001/bmi",
      headers: {
        height: height,
        weight: weight
      }
    });
    try {
      let bmi = request.data.bmi;
      bmi = Math.round(bmi * 100) / 100;
      this.setState({
        bmi: bmi,
        showScore: true
      });
    } catch (error) {
      throw error;
    }
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
