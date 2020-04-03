import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { name: 'Vietawake', age: 30 },
        { name: 'Quangawake', age: 22 },
        { name: 'Khuongawake', age: 22 }
      ]
    };
  }

  swichNameHanler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 31 },
        { name: 'Quang', age: 23 },
        { name: 'Khuong', age: 22 }
      ]
    });
  }

  nameChangeHanler = (event) => {
    this.setState({
      persons: [
        { name: 'newNam', age: 31 },
        { name: event.target.value, age: 23 },
        { name: 'Khuong', age: 22 }
      ]
    });
  }

  render() {
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
          <button onClick={() => this.swichNameHanler('Hello')}>Swich name</button>
          <Person click={() => this.swichNameHanler('Hello!')} name="Viet" age="21">
            My hobbies: Reading Books
          </Person>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            changed={this.nameChangeHanler}
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
          />
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          />
        </header>
      </div>
    );
  }

};

export default App;
