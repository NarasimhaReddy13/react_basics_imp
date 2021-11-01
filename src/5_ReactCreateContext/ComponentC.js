import React from "react";
import {UserConsumer} from './CreatingContext'
 
export function ComponentC()  {
    return(
        <UserConsumer>
            {
                (username) => { return <div> Hello {username} </div>}
            }
        </UserConsumer>
    )
}