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
            <p className={assignedClasses.join(' ')}>Hi, I am react-basics app</p>
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