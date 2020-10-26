import React from 'react';
import classes from './Cockpit.module.css';


const Cockpit = (props) => {
    let assignedClasses = [], BtnClass = '';
    if (props.switch)
        BtnClass = classes.red;
    if (props.persons.length <= 2)
        assignedClasses.push(classes.red);
    if (props.persons.length <= 1)
        assignedClasses.push(classes.bold);

    return (
        <div>
            <h1>
                {props.title}
            </h1>
            <p className={assignedClasses.join(' ')}>This is awesome and also easy to learn!!</p>
            <button
                className={BtnClass}
                alt={props.switch.toString()}
                onClick={props.clicked}>
                Switch name
        </button>
        </div>

    );
}


export default Cockpit;