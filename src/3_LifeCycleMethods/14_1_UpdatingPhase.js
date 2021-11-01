// updating Lifecycle methods are called when a component is being rerendered because of changes to props or state

import React, {Component} from 'react'
import UpdatingLifeCycleChild from './D_2_UpdatePhase(Child)'

class UpdatingLifeCycle extends Component {
    state = {name: "Narasimha Reddy"}

    static getDerivedStateFromProps(props, state) {
        console.log("LifeCycle - getDerivedStateFromProps")
        return null
    }

    shouldComponentUpdate() {
        console.log("LifeCycle - shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(prevProp, prevState) {
        console.log("LifeCycle - getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate(){
        console.log("LifeCycle - componentDidUpdate")
    }

    changeState = () => {
        this.setState({name: 'Updating Phase Done'})
    }

    render() {
        console.log("LifeCycle - render")
        return (
            <div>
                <div> LifeCycle - Updating Phase </div>
                <button onClick = {this.changeState}> {this.state.name} </button>
                <UpdatingLifeCycleChild/>
            </div>
        )
    }
}
export default UpdatingLifeCycle

// if we have child element in this --- verify once in console after exection to check the order of execution 
// fragments won't be added as extra nodes to DOM.