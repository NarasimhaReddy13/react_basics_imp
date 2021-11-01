/*3 steps to implement , when making use of context --
1. Create the Context   2. Provide a context value    3.  Consume the context value */


import React from 'react'

const UserContext = React.createContext('Narasimha')

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider, UserConsumer}


// step 2 -- The place we are providing this context is imp because only decendent components can consumen.


// We can set a default value to the context -- it is passed as an argument to the createContext() method --
// If we hide the component (UserProvider) in App.js  -- it will display Hello Nani -- so default value will only be used when a component does not have a matching provider above it in the component tree.

export default UserContext



// // Another methodd
            
// ComponentB.contextType = UserContext   // If our app supports the public class fields syntax , we can replace it with -- static contextType = UserContext above render() 
// // 2 limitations --
//     // -it only works with class components
//     // -We can only subscribe to single context using context type 
