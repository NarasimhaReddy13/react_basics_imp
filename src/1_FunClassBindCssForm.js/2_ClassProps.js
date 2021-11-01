import {Component} from 'react' 

// this keyword is reserved in class components

class ClassCompProps extends Component {
    render() {
        return (
            <div>
                <p style={{color: 'red', backgroundColor: "blue"}}> Class Component Props {this.props.name} </p>
                {this.props.children}
            </div>
        )
    }
}

export default ClassCompProps


// props destructure in -- render() { const {name, heroName} = props } -- use with {name} -paranthesis
//  we can destructure multiple or single state in same way



/*

Or create a file for styles :

const style = {
    fontSize: 100px, 

    heading1: {
        color: green
    },

    heading2: {
        backgroundColor: blue
    }
}
export default style;



import style from ----;

<h1 style={style}> Hello </h1>

<h1 style={{...style, ...style.heading1, ...style.heading2}}> React </h1>


In React Native -:-- We use Array 

<h1 style={[...style, ...style.heading1, ...style.heading2]}> React </h1>

*/





