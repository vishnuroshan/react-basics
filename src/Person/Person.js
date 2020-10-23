import React from 'react';
// import Radium from 'radium';
import classes from './Person.module.css';

const person = (props) => {

    console.log(props);
    return (
        <div className={classes.person}>
            < p onClick={props.click} >
                I am {props.name} and I am {props.age} years old!!
            </p >
            <p>{props.children}</p>
            <input type='text' onChange={props.change} value={props.name}></input>
        </div>
    );
}

export default person;