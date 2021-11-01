import { Component } from "react";

const clockContainer = {
    backgroundColor: 'pink',
    borderRadius: "10px",
}

class ClockChildElement extends Component {
    state = {date: new Date()}

    componentDidMount() {
        console.log("ComponentDidMount Called")
        this.timerID = setInterval(this.tick(), 1000)  // delete ()
    }

    componentWillUnmount() {
        console.log('ComponentWillUnmount Called')
        clearInterval(this.timerID)
    }

    tick = () => {
        this.setState({date: new Date()})
    }

    render(){
        const {date} = this.state
        return(
            <div>
                <div style={clockContainer}>
                    <h1> Clock </h1>
                    <h1> {date.toLocaleTimeString()} </h1>
                </div>
            </div>
        )
    }
}
export default ClockChildElement