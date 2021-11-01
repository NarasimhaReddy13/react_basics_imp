import React, { Component } from 'react'

class ClickCounterRenderProps extends Component {

    render() {
        const {count, incrementCount} = this.props
        return (
            <div>
                <button onClick={incrementCount}> Clicked {count} times </button>
            </div>
        )
    }
}

export default ClickCounterRenderProps

// similar file for onMouseOverRenderProps component


/* Render Props -- */
