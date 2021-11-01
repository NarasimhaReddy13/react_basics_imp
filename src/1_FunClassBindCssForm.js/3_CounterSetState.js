import React, {Component} from 'react'
import {Button, ButtonGroup} from '@material-ui/core'

class CounterSetState extends Component {
    state = { count: 0, welcome: 'Please Subscribe', hello: 'Hello'}

    changeMessage() {
        this.setState({welcome: 'Thank You for Subscribing'})
    }

    increment() {
        this.setState({count: this.state.count + 1})
        console.log(this.state.count)
    }

    increment1() {
        this.setState({count: this.state.count + 1} , () => {console.log(`Callback Vaue`, this.state.count)})   
    }

    // incrementProps() {
    //     this.setState((prevState, props) => ({ hello: prevState.hello + props.addValue}))
    // }   --- can be used in any way

    incrementProps1 = () => {
        this.setState((prevState, props) => ({ hello: prevState.hello + props.addValue + props.nextVal}))
    }

    render() {
        return (
            <>
                <div> Count - {this.state.count} </div>
                <h1> {this.state.welcome} </h1>

                <p> {this.state.hello} </p>
                <ButtonGroup disableripple='true' style={{flexDirection: 'column'}}>

                    <button onClick={()=> this.changeMessage()}> Click setState </button>  <br/>
                    <Button color='primary' variant='contained' onClick = {() => this.increment()}> console value is less than rendered value </Button>
                    <br/>
                    <Button color='primary' onClick = {() => this.increment1()}> Increment 1 </Button>
                
                    {/* <button onClick={() => this.incrementProps()}> Add Props </button> */}
                    <br/>
                    <button onClick={this.incrementProps1}> Add Props Simple</button>

                </ButtonGroup>
            </>
        )
    }
}

export default CounterSetState


// this.state.count = this.state.count + 1  --- Never modify the state directly


/* this.setState({count: this.state.count + 1})
console(...) 
* async operation -- because of this console is called first  */

// setState -- accepts object and callback (arrow) function

// we can pass second arg to the fun as props (prevState, props)

// We can destructure the state and props in render method above return statement const {name} = this.props
// const {state1, state2} = this.state