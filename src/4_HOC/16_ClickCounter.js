import React, {Component} from 'react'
import UpdatedComponent from './18_HOC'

class ClickCounterHoc extends Component {
    render() {
        const {count, incrementCount} = this.props
        return(
            <button onClick={incrementCount}> {this.props.name} Click HOC {count} </button>
        )
    }
}
export default UpdatedComponent(ClickCounterHoc, 2)


// Lifting solution is not a example -- when to reuse the code

// Higher Order Components --- why ? To share common functionality
// What ? --- A pattern where a function takes a component as an argument and returns new component


/* here this.props.name is from App component --- Initially we can't visible here this is because the props are passed to 
HOC , not to wrapped component--- to fix this issue pass the remaining props to the wrapped component using spread operator */

