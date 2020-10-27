import React from 'react'

// * A value you decide where to be available to use
const authContext = React.createContext({
    auth: false,
    login: () => { }
});

export default authContext;