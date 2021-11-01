// HOC ---  below code
import React from 'react'

const UpdatedComponent = (OriginalComponent, incrementNumber) => {
    class NewComponent extends React.Component {

        // Write Common functionality here
        state = {count: 0}

        incrementCount = () => {
            this.setState((prevState) => ({count: prevState.count + incrementNumber}))
        }

        render() {
            return(
                <OriginalComponent count={this.state.count} incrementCount={this.incrementCount} {...this.props} />
            )
        }
    }
    return NewComponent
}

export default UpdatedComponent



/* const EnhancedComp = higherOrerComponent(originalComponent) */

/* Passing parameters to HOC --- different counts --- so pass as 2nd parameter to arrow function to HOC */
