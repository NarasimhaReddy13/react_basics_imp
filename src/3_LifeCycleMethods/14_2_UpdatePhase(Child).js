import React, {Component} from 'react'

class UpdatingLifeCycleChild extends Component {
    state = {name: "Narasimha"}

    static getDerivedStateFromProps(props, state) {
        console.log("Child - getDerivedStateFromProps")
        return null
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Child - shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(prevProp, prevState) {
        console.log("Child - getSnapshotBeforeUpdate")
        return null  // returns null or value -- which is passed as 3rd arg to next function
    }

    componentDidUpdate(prevProp, prevState, snapshot){
        console.log("Child - componentDidUpdate") // 3rd parameter is from above 
    }

    render() {
        console.log("Child - render")
        return <div> LifeCycleChild </div>
    }
}
export default UpdatingLifeCycleChild

// if we have child element in this --- verify once in console after exection to check the order of execution 