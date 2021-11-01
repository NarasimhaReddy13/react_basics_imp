import React, {PureComponent} from 'react'
import RegComp from './8_3_RegularComponent'
import PureComp from './8_1_PureComponents'



// from Memo Component
import MemoComp from './8_4_MemoComp(Fun)'

class ParentComponentPure extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {name: "Narasimha"}
    }

    // Change PureComponent to Component and Verify in console --- Only Parent and Regular Components are triggered

    componentDidMount() {
        setInterval(() => {
            this.setState({name: "Narasimha"})
        }, 2000)
    }
    // If in setState and state --- name is different -- gives a warning as memory leak

    render() {
        console.log('** Parent Component Rendered **')
        return(
            <div> 
                Parent Component 
                <RegComp name={this.state.name}/>
                <PureComp name={this.state.name}/>
                <MemoComp name={this.state.name}/>
            </div>
        )
    }
}

export default ParentComponentPure