import {Component} from 'react'
import {ComponentC} from "./ComponentC";
// import UserContext from "./A_4_CreatingContext";
            
export class ComponentB extends Component {
    render() {
        return(
            <div>
                ComponentB Context {this.context}
                <ComponentC/>
            </div>
        )
    }
}