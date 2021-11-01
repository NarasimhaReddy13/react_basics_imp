import React, { Component } from 'react'

class CounterRenderProps extends Component {
    state = {count: 0}

    incrementCount = () => {
        this.setState((prev) => ({count: prev.count + 1}))
    }

    render() {
        return (
            <div>
                {this.props.render(this.state.count, this.incrementCount)}

                {/* {this.props.children(this.state.count, this.incrementCount)} */}
            </div>
        )
    }
}

export default CounterRenderProps

/* not to be with render name only --- it may be any name */

/* There is a render prop pattern which doesn't make use of the prop --- instead of that we can use children ---
but we have to make 2 changes 

1. delete render (only name ) in App.js --- pass all in {} flower braces ---- in the using component --
change props.render to props.children */
