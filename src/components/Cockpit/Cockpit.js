import React, {
    useEffect,
    useRef,
    useContext
} from 'react';
import classes from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {

    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);
    console.table(authContext);
    // before jsx renders...
    // toggleBtnRef.current.click();
    /*
    *  can use as amany useEfects you want
    *  second argument is important for changing the behavior
    *  second argument is an array. if its empty array, it will run only initially
    *  if second argument is props property, will run only when the props property changes
     */
    useEffect(() => {
        console.log('[cockpit.js] 1st useEffect');
        toggleBtnRef.current.click();
        return () => {
            console.log('[cockpit.js] cleanup work in useEffect');
        }
    }, []);

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
            <button ref={toggleBtnRef}
                className={BtnClass}
                alt={props.switch.toString()}
                onClick={props.clicked}>
                Switch name
        </button>
            <button onClick={authContext.login}>Login</button>
        </div>

    );
}


export default React.memo(Cockpit);