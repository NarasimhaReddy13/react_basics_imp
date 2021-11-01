import React, {Component} from 'react'
import UpdatedComponent from './18_HOC'

class MouseOverHoc extends Component {
    render() {
        const {count, incrementCount} = this.props
        return(
            <h3 onMouseOver={incrementCount}> MouseOver HOC {count} </h3>
        )
    }
}
export default UpdatedComponent(MouseOverHoc, 4)