import React, {useState} from 'react'

const Button = (props) => {
    const [counter, setCounter] = useState(0)
    return (
    <div onClick={()=> setCounter(c => c+1)} 
        style={{color: props.color, textDecoration: props.underline ? 'underline': undefined}}> 
        I'm a Button Click me {counter} 
    </div>
    )
}

export default function ButtonComp() {
    const props = {
        underline: true
    }
    return (
        <div>
            <Button color='red'/>
            <Button {...props} color='blue'/>
        </div>
    )
}
// order sending props is considered ( must )
