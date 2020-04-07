import React from "react";
import "./App.css";
import Person from "../components/Persons/Person/Person";
import styled from 'styled-components';


const StyleButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black;
  }
`;
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
    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'black'
    //   }
    // };

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
      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }
    const classes = [];
    if (this.state.persons.length <= 2) classes.push('red');
    if (this.state.persons.length <= 1) classes.push('bold');


    return (

      <div className="App" >
        <header className="App-header">
          <p className={classes.join(' ')}>this is really working!!!</p>
          <StyleButton
            alt={this.state.showPersons}
            onClick={this.togglePersonsHandler}> Toggle Name
          </StyleButton>
          {persons}
        </header>
      </div>
    );
  }

};

export default App;
