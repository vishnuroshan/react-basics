import React, { Component } from 'react';
import classes from './App.module.css';
// import styled from 'styled-components';
import Person from './Person/Person';
import ErrorBoundry from './ErrorBoundry/ErrorBoundry';
// import Radium, { StyleRoot } from 'radium';

// const StyledButton = styled.button`
//     background-color: ${props => props.alt ? 'red' : 'green'};
//     color: white;
//     font: inherit;
//     border: 1px solid blue;
//     padding: 8px;
//     cursor: pointer;

//     &:hover {
//       background-color: ${props => props.alt ? 'salmon' : 'red'};
//       color: black;
//     }
// `;

class App extends Component {

  state = {
    persons: [
      {
        id: '1',
        name: 'vijay',
        age: 190
      },
      {
        name: 'vishnu',
        age: 26
      },
      {
        name: 'manoj',
        age: 54
      }
    ],
    showPerson: false
  }

  deletePersonHandler = (index) => {
    let persons = [...this.state.persons]
    persons.splice(index, 1);
    this.setState({
      persons: persons
    });
  }

  togglePersonHandler = () => {
    this.setState({ showPerson: !this.state.showPerson });
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;
    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({ persons });


    this.setState({
      persons: [{
        id: '1',
        name: event.target.value,
        age: 19
      },
      {
        id: '2',
        name: 'vishnu',
        age: 26
      },
      {
        id: '3',
        name: 'manoj',
        age: 54
      }]
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
    // }
    let BtnClass = '';
    let persons = null;
    if (this.state.showPerson) {
      persons = (
        <div >
          {this.state.persons.map((person, index) => {
            return <ErrorBoundry key={person.id}>
              <Person
                click={this.deletePersonHandler.bind(this, index)}
                name={person.name}
                age={person.age}
                change={(event) => this.nameChangedHandler(event, person.id)}
              />
            </ErrorBoundry>;
          })}
        </div>
      );

      BtnClass = classes.red;
    }

    // let classes = ['red', 'bold'].join(' ');
    let assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <p className={assignedClasses.join(' ')}>Hi, I am react-basics app</p>
        <button
          className={BtnClass}
          alt={this.state.showPerson}
          onClick={this.togglePersonHandler}>
          Switch name
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
