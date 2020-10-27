
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Person.module.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';

class Person extends Component {

    constructor(props) {
        super(props)
        this.inputElementRef = React.createRef();
    }
    static contextType = AuthContext;

    componentDidMount() {
        this.inputElementRef.current.focus();
        console.log(this.context.auth);
    }


    render() {
        console.log('person.js rendering!!')
        return [
            <Aux>

                {this.context.auth ?
                    <p>Authenticated</p> :
                    <p>not authenticated</p>}
                <p key='i1' onClick={this.props.click}>
                    I am {this.props.name} and I am {this.props.age} years old!!
                    </p>
                <p key='i2'>{this.props.children}</p>
                <input
                    key='i3'
                    // ref={(inputEl) => this.inputElement = inputEl}
                    ref={this.inputElementRef}
                    type='text'
                    onChange={this.props.change}
                    value={this.props.name}
                />
            </Aux>
        ];
    }
}

Person.propTypes = {
    click: PropTypes.func,
    age: PropTypes.number,
    name: PropTypes.string,
    change: PropTypes.func
};

export default withClass(Person, classes.Person);