import React, { Component } from "react";
import ForwRefs from "./9_2_ForwardingRefs";

class ForwRefParent extends Component {
    inputRef = React.createRef()

    clickHandler = () => {
        this.inputRef.current.focus()
    }

    render(){
        return(
            <div>
                <ForwRefs ref={this.inputRef}/>
                <button onClick={this.clickHandler}> Focus Input </button>
            </div>
        )
    }
}

export default ForwRefParent