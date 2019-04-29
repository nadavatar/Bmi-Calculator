import React, { Component } from "react";

export default class Score extends Component {
  textSelector = score => {
    if (score < 18.5) {
      let text1 =
        "You are underweight. \nYou need to gain weight or lift heavy weights in order to gain a few kilograms.";
      return text1;
    } else if (score >= 18.5 && score < 25) {
      let text2 =
        "Youre BMI is good!\nYou should keep this weight, eat healthy and exercise.";
      return text2;
    } else if (score >= 25 && score < 35) {
      let text3 =
        "You are overweight!\nYou should lose a few kilograms, eat healthy and exercise!";
      return text3;
    } else {
      let text4 =
        "You are severly overweight!\nYou need to see a doctor, your life is in danger!";
      return text4;
    }
  };

  render() {
    return (
      <div>
        <h3>
          <b>Your Score Is: {this.props.score}</b>
        </h3>
        <p>{this.textSelector(this.props.score)}</p>
      </div>
    );
  }
}
