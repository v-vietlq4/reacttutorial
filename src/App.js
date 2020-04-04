import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { id: 'id1', name: 'Vietawake', age: 30 },
        { id: 'id2', name: 'Quangawake', age: 22 },
        { id: 'id3', name: 'Khuongawake', age: 22 },
      ],
      showPersons: false
    };
  }

  nameChangeHanler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    });
  }

  deletePersonHanler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1)
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangeHanler(event, person.id)}
            />
          })}
        </div>
      );
    }

    return (
      <div className="App" >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button
            style={style}
            onClick={this.togglePersonsHandler}> Toggle Name</button>
          {persons}
        </header>
      </div>
    );
  }

};

export default App;
