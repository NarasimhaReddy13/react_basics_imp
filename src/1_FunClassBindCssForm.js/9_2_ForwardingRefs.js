import React from 'react'

// ref is forwarded from parent to native input element
// React.forwardRef() -- takes component as its parameter 
// when a component is passed as a parameter to the createRef method, it receives ref attribute as its second parameter




const ForwRefs = React.forwardRef((props, ref) => {
    return(
        <div>
            <input type='text' ref={ref}/>
        </div>
    )
})

export default ForwRefs