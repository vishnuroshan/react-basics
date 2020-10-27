import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {

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
        console.log('[Persons.js shouldComponentUpdate]');
        return true;
    }
    /*
    *  This is one of the newer lifecycle methods introduced very recently
    *  safer alternative to the previous lifecycle method componentWillUpdate()
    *  called right before the DOM is updated
    *  The value that is returned from getSnapshotBeforeUpdate() is passed on to componentDidUpdate()
    *  rare use cases
    *  for more please visit https://programmingwithmosh.com/javascript/react-lifecycle-methods/
    */
    getSnapshotBeforeUpdate(prvProps, prvState) {
        console.log('[Persons.js getSnapshotBeforeUpdate]');
        return { message: 'snapshot' };
    }

    /*
    *  invoked as soon as the updating happens
    *  The most common use case is updating the DOM in response to prop or state changes
    *  need to wrap it in a condition to check for state or prop changes from previous state
    *  Incorrect usage of setState() can lead to an infinite loop
    *  allows setState()
    *  for more please visit https://programmingwithmosh.com/javascript/react-lifecycle-methods/
    */
    componentDidUpdate(prvProps, prvState, snapshot) {
        console.log('[Persons.js componentDidUpdate]');
        console.log(snapshot);
    }

    render() {
        console.log('Persons.js rendering');
        return this.props.persons.map((person, index) => {
            return <Person
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key={index}
                change={(event) => this.props.changed(event, person.id)}
            />
        })
    }
}

export default Persons;