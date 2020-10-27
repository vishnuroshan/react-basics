import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor(props) {
    super(props);
    console.log('App.j constructor');
  }

  /*
   *  This is one of the newer lifecycle methods introduced very recently
   *  safer alternative to the previous lifecycle method componentWillReceiveProps()
   *  This is a static function that does not have access to “this“
   *  returns an object to update state in response to prop changes
   *  It can return a null if there is no change to state
   *  rare use cases where the state depends on changes in props in a component
   *  fired on every render
   *  for more please visit https://programmingwithmosh.com/javascript/react-lifecycle-methods/
   */
  static getDerivedStateFromProps(props, state) {
    console.log('App.j getDerivedStateFromProps', props);
    return state;
  }

  /*
   *  called as soon as the component is mounted and ready
   *  good place to initiate API calls
   *  allows the use of setState() {but use it with caution. used only in special cases}
   *  The best practice is to ensure that your states are assigned in the constructor()
   *  for more please visit https://programmingwithmosh.com/javascript/react-lifecycle-methods/
   */
  componentDidMount() {
    console.log('App.js componentDidMount');
  }

  state = {
    persons: [
      { id: '1', name: 'vijay', age: 19 },
      { id: '2', name: 'vishnu', age: 26 },
      { id: '3', name: 'manoj', age: 54 }
    ], showPerson: false
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
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons });
  }

  /*
  *  render() is the only required method within a class component in React
  *  it handles the rendering of your component to the UI.
  *  It happens during the mounting and updating of your component.
  *  has to be pure with no side-effects
  *  does NOT allows the use of setState()
  *  for more please visit https://programmingwithmosh.com/javascript/react-lifecycle-methods/
  */
  render() {
    console.log('App.js render')
    let persons = null;
    if (this.state.showPerson) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />
      );
    }

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
