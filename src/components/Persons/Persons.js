import React, { PureComponent } from 'react';
import Person from './Person/Person';
// pureComponent does shouldcomponentUpdate for all props properties itself
class Persons extends PureComponent {

    // ? using pureComponent, this is automatically done
    // shouldComponentUpdate(nxtProps, nxtState) {
    //     console.log('[Persons.js shouldComponentUpdate]');
    //     if (
    //         nxtProps.persons !== this.props.persons ||
    //         nxtProps.changed !== this.props.changed ||
    //         nxtProps.clicked !== this.props.clicked
    //     )
    //         return true;
    //     else return false;
    // }

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

    componentWillUnmount() {
        console.log('[person.js] componentWillUnmount')
    }

    render() {
        console.log('Persons.js rendering');
        return this.props.persons.map((person, index) => {
            return <Person
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                change={(event) => this.props.changed(event, person.id)}
            />
        })
    }
}

export default Persons;