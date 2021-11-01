// Every component in react goes through 3 components throughout its lifetime --

// Mounting --- In this, before visible(in UI) the component goes to mounting phase , then only it will visible
        // -- Instance of a component(all code) is created
        // -- Then it will insert into DOM Tree (after <div id="root">)
    
// Updating -- When we update the state , then the component will render automatically( state changes/triggers update)
// Unmounting -- dissappering the component after sometime. -- Component instance is removed from the DOM

// In every phase of Component life cycle -- there are some methods used to control behaviour of the component


// In mounting phase -- In order
                    // constructor() -- Set up the initial state and class variables
                    // render() ------  Returns JSX that is displayed in the UI
                    // componentDidMount() -- To do the operations after the initial render (Initiate API Calls)


import { Component } from "react";
import ClockChildElement from "./J_2_CompChild";

const clockButton = {
    backgroundColor: "Blue",
    color: 'white',
    padding: '12px',
    borderRadius: '7px',
    border: 'none',
    marginBottom: '10px'
}

class LifeCycleMethods extends Component {
    state = {date: new Date(), showClock: true}

    static getDerivedStateFromProps(props, state) {
        console.log("LifeCycle - getDerivedStateFromProps")
        return null // returns newState or null
    }

    onToggleClock = () => {
        this.setState(prevState => {
            const {showClock} = prevState
            return {
                showClock: !showClock,
            }
        })
    }

    render() {

        const {showClock} = this.state
        return(
            <div>
                <button style={clockButton} onClick={this.onToggleClock}> {showClock ? 'Hide Clock': 'Show Clock'} </button>
                {showClock && <ClockChildElement showClock={showClock}/>}
            </div>
        )
    }
}

export default LifeCycleMethods

// Use child component for better understanding in render --- verify once in console after exection to check the order of execution 
// constructor(parent)- getDState(parent)-render(parent)-construct(child)-getDState(child)-render(child)-compDM(child)-compDM(parent)