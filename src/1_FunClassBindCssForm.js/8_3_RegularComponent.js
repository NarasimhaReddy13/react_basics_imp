// In all the cases we have been creating class components by extending components from react (even the App component also)
// 2nd way of creating class component--- by extending PureComponent from react

import React, {Component} from 'react'






class RegComp extends Component {
    render() {
        console.log('** Regular Component Rendered **')
        return(
            <div> Regular Component {this.props.name}</div>
        )
    }
}

export default RegComp