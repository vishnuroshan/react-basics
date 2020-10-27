import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';
import AuthContext from '../context/auth-context';

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

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate')
  }

  /*
    *  can be handy sometimes when you don’t want React to render your state or prop changes
    *  Anytime setState() is called, the component re-renders by default
    *  used to let React know if a component is not affected by the state and prop changes
    *  Ishould be sparingly used
    *  does NOT allows setState()
    *  should always return a boolean value to the question, “Should I re-render my component?”
    *  for more please visit https://programmingwithmosh.com/javascript/react-lifecycle-methods/
    */
  shouldComponentUpdate(nxtProps, nxtState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
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
    ], auth: false,
    showPerson: false, showCockpit: true, changeCounter: 0
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
    this.setState((prvState, props) => {
      return {
        persons,
        changeCounter: prvState.changeCounter + 1
      }
    });
  }

  authenticate = () => {
    this.setState({ auth: true });
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
      <Aux>
        <button
          onClick={() => { this.setState({ showCockpit: false }) }}>
          Remove cockpit
          </button>

        <AuthContext.Provider value={{
          auth: this.state.auth,
          login: this.authenticate
        }}>
          {this.state.showCockpit ? <Cockpit
            login={this.authenticate}
            title={this.props.title}
            personsLength={this.state.persons.length}
            switch={this.state.showPerson}
            clicked={this.togglePersonHandler}
          /> : null}
          {persons}
        </AuthContext.Provider>

      </Aux >
    );
  }
}

export default withClass(App, classes.App);
