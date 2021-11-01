import React from 'react'

function ChildComponent(props) {
    return(
        <div>
            {/* getting function from parent component */}
            <button onClick = {props.greetHandler}> Greet Parent </button>

            {/* Arrow fun is the simplest way to pass params from child to parent also  -- use only if we want to pass parameters from child to parent */}
            <button onClick = {() => props.greetHandler('Child', 'Narasimha')}> Greet Parent from Child</button>
        </div>
    )
}

export default ChildComponent