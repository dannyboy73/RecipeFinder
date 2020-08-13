import React, { Component } from "react";
import axios from "axios";

export default class IngredientForm extends Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
      randomRecipe: false
    };
  }

  componentDidMount() {
    axios
      .get("https://swapi.dev/api/people/1")
      .then((response) => console.log(response.data));
  }

  render() {
    return <h1>This is the form</h1>;
  }
}
