import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";
const app = props => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [personState, setPersonState] = useState({
    persons: [
      { name: "Vietawake", age: 30 },
      { name: "Quangawake", age: 22 },
      { name: "Khuongawake", age: 22 }
    ]
  });
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [otherState, setOtherState] = useState('some other state');

  console.log(personState, otherState);

  const swichNameHanler = () => {
    setPersonState({
      persons: [
        { name: "Viet", age: 31 },
        { name: "Quang", age: 23 },
        { name: "Khuong", age: 22 }
      ]
    });
  };
  return (
    <div className="App">
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
        <button onClick={swichNameHanler}>Swich name</button>
        <Person name="Viet" age="21">
          My hobbies: Reading Books{" "}
        </Person>
        <Person
          name={personState.persons[0].name}
          age={personState.persons[0].age}
        />
        <Person
          name={personState.persons[1].name}
          age={personState.persons[1].age}
        />
        <Person
          name={personState.persons[2].name}
          age={personState.persons[2].age}
        />
      </header>
    </div>
  );
};

export default app;
