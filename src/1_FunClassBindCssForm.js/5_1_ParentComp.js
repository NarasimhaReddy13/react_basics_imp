import React, {Component} from 'react'
import ChildComponent from './5_2_Parent2Child'

class ParentComponent extends Component {
    state = {parentName: "Parent"}

    greetParent = this.greetParent.bind(this)

    greetParent(childName, name) {
        alert(`Hello ${this.state.parentName} from ${childName} ${name}`)
    }

    render() {
        return(
            <div>
                {/* passing method itself as a prop */}

                <ChildComponent greetHandler = {this.greetParent} />
            </div>
        )
    }
}

export default ParentComponent