import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  state = {
    persons: [
      {
        id: '1',
        name: 'vijay',
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
    console.log(this.state.persons);
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;
    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({ persons });
  }


  render() {
    let persons = null;
    if (this.state.showPerson) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />
      );
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
        <Cockpit
          title={this.props.title}
          persons={this.state.persons}
          switch={this.state.showPerson}
          clicked={this.togglePersonHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
