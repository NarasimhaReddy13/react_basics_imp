// Using refs we can acess the DOM nodes directly --- refs can't be attached to functional components
// ref is a reserved attribute --- to create focus 
// we can also use inputRef --------- to fetch the input value


import React, { Component } from "react";

class InputRefs extends Component {
    inputRef1 = React.createRef()

    // related to inputRef1
    componentDidMount() {
        this.inputRef1.current.focus()
        console.log(this.inputRef)  // related to DOM node
    }

    clickHandler1 = () => {
        // this.inputRef1.current.focus()  --- using button to focus input 
        if (this.inputRef1.current.value !== '') {
            alert(this.inputRef1.current.value)
        }
    }

    render(){
        return(
            <div>
                <input type="text" ref={this.inputRef1}/>
                <button onClick={this.clickHandler1}> React.createRef() </button>
            </div>
        )
    }
}

export default InputRefs

// pass refs from parent to child .. watch video .. it is possible ( only in class components )

// 2nd way to use refs as callback refs ( older way )

/* callback refs ---- 4 steps -- 

1. create ref and assign a property null
2. create a method that will assign a DOM element to the ref that we created in step 1
3. Attach this ref to input element
4. In componentDidMount -- focus the callback ref ( react will call the ref callback with the DOM element when mounts -- 
    and call it with null when it unmounts )  -- so it's imp to check a value exists in reference or not  */


export class CallBackRefs extends Component {
    cbref = null

    setCbRef = (element) => {
        this.cbref = element
    }

    componentDidMount() {
        if (this.cbref !== null) {
            this.cbref.focus()
        }
    }
    // No need of current

    render() {
        return (
            <input ref={this.setCbRef} />
        )
    }
}