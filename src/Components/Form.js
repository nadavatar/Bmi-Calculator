import React, { Component } from "react";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      height: 0,
      weight: 0
    };
  }

  handleHeight = e => {
    this.setState({
      height: e.target.value
    });
  };

  handleWeight = e => {
    this.setState({
      weight: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const height = this.state.height / 100;
    const weight = this.state.weight;

    if (weight > 0 && height > 0) {
      this.props.handleFormSubmit(height, weight);
    }
  };

  render() {
    return (
      <div>
        <form>
          <div className="gender">
            <label htmlFor="male">Male </label>
            <input type="radio" name="gender" id="male" value="male " />
            <label htmlFor="female">Female </label>
            <input type="radio" name="gender" id="female" value="female " />
          </div>
          <div className="age">
            <label htmlFor="age">Your Age: </label>
            <input type="number" placeholder="Enter your age..." id="age" />
          </div>
          <div className="height">
            <label htmlFor="height">Your Height (in cm): </label>
            <input
              type="number"
              placeholder="Enter your height(in cm)..."
              id="height"
              onChange={this.handleHeight}
            />
          </div>
          <div className="weight">
            <label htmlFor="weight">Your Weight (in kg): </label>
            <input
              type="number"
              placeholder="Enter your weight(in kg)..."
              id="weight"
              onChange={this.handleWeight}
            />
          </div>
          <input
            type="submit"
            value="Calculate"
            id="submit-button"
            onClick={this.handleSubmit}
          />
        </form>
      </div>
    );
  }
}
