import React, { Component } from 'react'

class UserRenderProps extends Component {
    render() {
        return (
            <div>
                Render Props Direct

                {/* {this.props.name} */}
                <>
                    {this.props.name(false)}
                </>
            </div>
        )
    }
}

export default UserRenderProps


/* render prop refers to a technique for sharing code b/w react components using a prop whose value is a function */
