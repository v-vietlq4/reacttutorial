import React from "react";
import "./App.css";
import Person from "./Person/Person";
import Radium, { StyleRoot } from 'radium';
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

  deletePersonHandler = (personIndex) => {
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
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
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
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }
    const classes = [];
    if (this.state.persons.length <= 2) classes.push('red');
    if (this.state.persons.length <= 1) classes.push('bold');


    return (
      <StyleRoot>
        <div className="App" >
          <header className="App-header">
            <p className={classes.join(' ')}>this is really working!!!</p>
            <button
              style={style}
              onClick={this.togglePersonsHandler}> Toggle Name
          </button>
            {persons}
          </header>
        </div>
      </StyleRoot>
    );
  }

};

export default Radium(App);
