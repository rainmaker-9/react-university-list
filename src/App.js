import React, { Component } from "react";
import Universities from "./Universities";

export default class App extends Component {
  state = {
    countries: [],
    selectedCountry: null,
  };

  componentDidMount() {
    this.setState({
      countries: [
        { name: "India", value: "india" },
        { name: "Canada", value: "canada" },
      ],
    });
  }

  countryChange = (e) => {
    if (e.target.value !== null && e.target.value.trim() !== "") {
      this.setState({ selectedCountry: e.target.value });
    }
  };

  render() {
    console.log(this.state.selectedCountry);
    return (
      <div>
        <select
          value={this.state.selectedCountry}
          onChange={(e) => this.countryChange(e)}
        >
          <option value="">Select Country</option>
          {this.state.countries.map((country) => {
            return (
              <option key={country.value} value={country.value}>
                {country.name}
              </option>
            );
          })}
        </select>
        {this.state.selectedCountry !== null ? (
          <Universities country={this.state.selectedCountry} />
        ) : null}
      </div>
    );
  }
}
