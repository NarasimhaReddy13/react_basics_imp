import React from 'react'

function NamesListIdorIndexChild({each}) {
    return(
        <div> 
            <h4> I am {each.name} , age {each.age} </h4>
        </div>
    )    
}

export default NamesListIdorIndexChild