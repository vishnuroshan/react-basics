import React, { Component } from "react";

class ErrorBoundry extends Component {
    state = {
        hasError: false,
        errormsg: ''
    }

    componentDidCatch = (error, info) => {
        this.setState({ hasError: true, errormsg: error })
    }

    render() {
        return this.state.hasError ?
            <h1>Something went wrong!</h1> :
            this.props.children
    }
}

export default ErrorBoundry;