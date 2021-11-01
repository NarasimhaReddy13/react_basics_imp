// Previously we have been creating class components by extending components from react (even the App component also)
// 2nd way is --- by extending pure component from react



import React, {PureComponent} from 'react'

class PureComp extends PureComponent {
    render() {
        console.log(" Pure Component Rendered  ")
        return(
            <div> Pure Component {this.props.name} </div>
        )
    }
}

export default PureComp




/* Pure component verifies the prev state and prop -- If any difference only it will render otherwise it will not render
Why to use Pure Components ? --- It will prevent unnecessary renders and give us a performance boost in some scenarios.
Never mutate the object/arrays in props/state -- Always return a new object or array when dealing with pure Components */


// similarly React.memo() is for functional components
