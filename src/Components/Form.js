import React, { Component } from "react";

export default class Form extends Component {
  render() {
    return (
      <div>
        <form>
          <div>
            <label htmlFor="male">Male </label>
            <input type="radio" name="gender" id="male" value="male " />
            <label htmlFor="female">Female </label>
            <input type="radio" name="gender" id="female" value="female " />
          </div>
          <div>
            <label htmlFor="age">Your Age: </label>
            <input type="number" placeholder="Enter your age..." id="age" />
          </div>
          <div>
            <label htmlFor="age">Your Height (in cm): </label>
            <input
              type="number"
              placeholder="Enter your height(in cm)..."
              id="age"
            />
          </div>
          <div>
            <label htmlFor="weight">Your Weight (in kg): </label>
            <input
              type="number"
              placeholder="Enter your weight(in kg)..."
              id="weight"
            />
          </div>
        </form>
      </div>
    );
  }
}
