import React, {Component} from 'react'

class ConditionalRender extends Component {
    constructor(props){
        super(props)

        this.state = { isLoggedIn: false}
    }

    render() {
        // if (this.state.isLoggedIn) {
        //     return <div> Welcome Narasimha </div> ------------ use if condition above return statement and return the whole statement
        // } or use else --------------------------------------- adding if-else in JSX is not valid , JSX if just for function calls and object construction
        // return <div> Welcome User </div>


        // let message ------------------------ Element variable approach
        // if (this.state.isLoggedIn) {
        //     message = <div> Hello Narasimha</div>
        // } else {
        //     message = <div> Hello User </div>
        // }
        // return <div> message </div>


        // Terinary operator ----- can be used in return also
        // return this.state.isLoggedIn ? <div> Welcome Narasimha </div> : <div> Welcome User </div>

        return this.state.isLoggedIn && <div> Welcome Narasimha </div> // simple way when to return if true only -- short circuit operator
    }
}
export default ConditionalRender