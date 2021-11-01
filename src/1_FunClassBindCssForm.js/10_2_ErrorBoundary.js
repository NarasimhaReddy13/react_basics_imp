import { Component } from "react";

class ErrorBoundary extends Component {
    state = {hasError: false}

    static getDerivedStateFromError(error) {
        return {hasError:true}
    }

    // After verifying error with above method only we are adding this
    componentDidCatch(error, info){
        console.log(error)
        console.log(info)
    }
    // used to log the errors -- react automatically logs every error in the console
    // lifecycle methods catch errors during rendering and in the constructors of whole tree below then ( they do not catch in event handlers -- use try catch )
    // Use try and catch block for logging errors when using event handlers

    render(){
        if (this.state.hasError) {
            return <h1> Something Went Wrong </h1>
        }
        return this.props.children
    }
}
export default ErrorBoundary