import React from 'react'
import NamesListIdorIndexChild from './11_2_List2Child'

// we can create seperate files nameslist and render person.
function NamesListIdorIndex() {
    const names = [
        { id: 1,name: "Ram",age: 29 },
        { id: 2, name: "Vijay", age: 27 }
    ]

    const namesArray = ['Ram',"Narasimha","Ram"]

    // warning uniq key prop -- (name, age, id -- but must be unique)
    // keys -- can't be accessed in child comp -- key is not a prop ( it is reserved -- special string attribute, gives stable identity )
    // Why ? -- keys help react identifying which items in a list are changed/added/removed -- crucial role in handling UI updates
    
    const nameList = names.map(person => (<h2 key={person.id}> I am {person.name}. I am {person.age} </h2>))

    const namesChildList = names.map(each => (<NamesListIdorIndexChild each={each} key={each.id}/>))

    const nameListArray = namesArray.map((name, index) => (<h2 key={index}> I am {name} </h2>))
    return(
        <div> 
            {/* The map method is a JS function ( code ) which needs to be evaluated */}

            {
                namesArray.map((name, index) => (<h4 key={index}> {name} {index} </h4>))
            }

{/* We can write at top and store using const ----Only use index as a key when list don't have uniq id and 
list is static and will not change ( never adding/removing items ), list will never be reordered or filtered */}

            {nameList}
            {namesChildList}
            {nameListArray}
        </div>
    )    
}

export default NamesListIdorIndex


// Using index as key will cause some serious UI issues --- use npm packages to generate uniq Id