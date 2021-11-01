import React, { Component } from 'react'
import './index.css'

class TodoInput extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             todoText: ''
        }
    }

    onSubmitForm = (e) => {
        e.preventDefault()

        this.props.addTodo(this.state.todoText)

        this.setState({todoText: ''})
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitForm}>
            
                    <input type="text" placeholder="Add your todo here" value={this.state.todoText} 
                    onChange={(e) => this.setState({todoText: e.target.value })} />

                </form>
            </div>
        )
    }
}

export default TodoInput
