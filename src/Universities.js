import React, { Component } from "react";

export default class Universities extends Component {
  state = {
    universities: [],
  };
  componentDidMount() {
    if (this.props.country !== null && this.props.country.trim() !== "") {
      fetch(
        `http://universities.hipolabs.com/search?country=${this.props.country}`
      ).then((response) => {
        if (response.ok && response.status === 200) {
          response.json().then((result) => {
            this.setState({ universities: result });
          });
        }
      });
    }
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.universities.map((university) => {
            return <li key={university.name}>{university.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}
