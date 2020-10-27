import React, {
    // useEffect
} from 'react';
import classes from './Cockpit.module.css';


const Cockpit = (props) => {
    /*
    *  can use as amany useEfects you want
    *  second argument is important for changing the behavior
    *  second argument is an array. if its empty array, it will run only initially
    *  if second argument is props property, will run only when the props property changes
     */
    //    useEffect(() => {
    //         console.log('[cockpit.js] 1st useEffect');
    //         // API call
    //         setTimeout(() => {
    //             alert('saved something in cloud!');
    //         }, 1000);

    //         return () => {
    //             console.log('[cockpit.js] cleanup work in 1st useEffect');
    //         }
    //     }, []);

    //     useEffect(() => { 
    //         console.log('[cockpit.js] 2nd useEffect');
    //         // can do some computation
    //         return () => {
    //             console.log('[cockpit.js] cleanup work in 2nd useEffect');
    //         }
    //     });


    let assignedClasses = [], BtnClass = '';
    if (props.switch)
        BtnClass = classes.red;
    if (props.personsLength <= 2)
        assignedClasses.push(classes.red);
    if (props.personsLengt <= 1)
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


export default React.memo(Cockpit);