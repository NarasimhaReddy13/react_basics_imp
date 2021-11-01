import React, {Component} from 'react'
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';

class ClassStateBinding extends Component {
    state = { message: "Click to Bind State", count: 0, count2: 0}

    // add this line only for 3rd case
    changeMessage = this.changeMessage.bind(this)

    clickHandler() {
        console.log("Simple Fun can't modify the state")
        console.log(this)
        this.setState({message: "Successfully Binded"})
    }

    changeMessage() {
        this.setState({message: "Successfully Binded"})
        this.setState({count: this.state.count + 1})
        this.setState(prev => ({count2: prev.count2 + 2}))
    }

    render() {
        return(
            <div>

                <h1> {this.state.message} </h1>
                <h1> {this.state.count} </h1>
                <h1> {this.state.count2} </h1>

                <button onClick = {this.clickHandler}> Click Class </button>
                {/* In class Comp .. we call funtion as this.funName --- and funName() used directly above render.
                As this keyword is undefined (in event handler ) - we can't modify the state , only console values can be seen */}


                {/* 1. Binding using bind keyword to bind the event handler in render--- rerenders everytime -- troubles in large components*/}
                {/*<button onClick = {this.changeMessage.bind(this)}> Subscribe </button>  */}

                
                {/* 2. must be arrow fun ( {this.changeMessage} will give setState is undefined because this keyword is undefined) 
                 --so when using arrow fun to call fun -- use this.funName()  */}
                {/* <button onClick = {() => this.changeMessage()}> Subscribe </button> */}
                

                {/* 3. Official react doc -- deals with binding the event handler in the constructor as opposed to binding in render */}
                <button onClick = {this.changeMessage}> Subscribe </button>

                <Fab variant="extended" color="primary"> <NavigationIcon/> Navigate </Fab>
            
            </div>
        )
    }

    // 4th approach : changeMesage = () => { this.setState({message: "Successfully Binded"})}  -- 3rd is best ( 4th is in experimental )
}

export default ClassStateBinding


// Fab --- Floating Action Button
