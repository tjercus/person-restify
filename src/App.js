import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { fetchPersons } from "./personService";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      persons: []
    };
  }

  componentDidMount = () => {
    setTimeout(() => {
      fetchPersons().then(persons => this.setState({persons: persons}));
    }, 2000);
  };

  render() {
    let personsJsx = this.state.persons;
    if (this.state.persons.length === 0) {
      personsJsx = <p>Please wait ...</p>;
    } else {
      personsJsx = (
        <ul className="App-intro">
          {this.state.persons.map(
            person => <li key={person.id}><b>{person.name}</b>, {person.email}</li>
          )}
        </ul>
      );
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Load some JSON from a REST-API</h1>
        </header>
        {personsJsx}
      </div>
    );
  }
}

export default App;
