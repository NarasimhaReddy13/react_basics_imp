import React from 'react'

import {Button, Checkbox } from '@material-ui/core';

function FunComp(props) {
    const {name} = props

    function clickHandler() {
        console.log(name, props.lName)
    }

    return (
        <>
            <Button color='secondary'> Functional Component {name}</Button> 
            <Button onClick = {clickHandler} variant='contained' color='primary'> Click Component (onClick) </Button>

            <Checkbox defaultChecked/>

        </>
    )
}
export default FunComp


// onClick -- camel-case and with jsx we pass the function as event handler rather then string 
// In function components , we pass only function name in {} -- when using funtion name with function funName above return*/}

// If we add paranthesis --  nothing happens -- so use only functionName not function call


// named export  --- and/or JSX

export const Props = (props) => {
    return (
    <React.Fragment>
        <h1> {props.name} - {props.lastName }</h1>
        {props.children}
    </React.Fragment>
    )
}

// props destructuring -- instead of props -- destructure in the function parameter as ({name, lastName})
// or above return statement (function body )--const {name, heroName} = props

// When passing unknown content -- to use it ---- children is a reserved property 
