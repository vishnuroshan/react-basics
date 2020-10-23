import React from 'react';
// import Radium from 'radium';
import classes from './Person.module.css';

const person = (props) => {

    let rnd = Math.random();
    console.log(rnd);
    if (rnd > 0.7) {
        throw new Error('Something went wrong!');
    }
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