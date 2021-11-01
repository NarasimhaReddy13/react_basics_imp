import React from 'react'

function MemoComp({name}) {
    console.log('*** Rendering Memo Component ***')
    return(
        <div>
            React.memo(FunctionName) {name} -- Component
        </div>
    )
}

export default React.memo(MemoComp)




// Introduced in v16.6 -- 
// It will prevents component re-render if there is no change in props and sate -- use only in functional component