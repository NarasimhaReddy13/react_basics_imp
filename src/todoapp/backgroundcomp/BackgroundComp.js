import React, {Component} from 'react'
import Todo from '../todo/Todo'
import TodoInput from '../todoform/TodoInput'
import './index.css'

export default class BackgroundComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             todos: [{id:1, title: "First Todo", completed: false},
            {id:2, title: "Second Todo", completed: true}]
        }
    }
    
    addTodo = (todo) => {

        let todos = [...this.state.todos]

        let id = todos[todos.length - 1] ? todos[todos.length - 1] + 1 : 0;

        let newTodo = {
            id,
            title: todo,
            completed: false
        }

        todos.push(newTodo)
        this.setState({todos: todos})
    }

    completeTodo = (id) => {
        let todos = [...this.state.todos]

        todos.filter((todo) => {
            if (todo.id === id) {
                todo.completed = true
            }
        })
        this.setState({todos})
    }

    deleteTodo = (id) => {
        let todos = [...this.state.todos]

        todos.filter( (todo, index)  => {
            if(todo.id === id) {
                todos.splice(index, 1)
            }
        })
        this.setState({todos})
    }

    render() {
        return (
            <div>
                <b> Developer </b>
                <h1 className="heading"> Todo Management Application</h1>

                <div className="todos-ht">
                    {this.state.todos.map( todo => (
                        <Todo todo={todo} key={todo.id} completeTodo={(id) => this.completeTodo(id)} 
                        deleteTodo = {(id) => this.deleteTodo(id)} />
                    ))}
                </div>

                <TodoInput addTodo={(todo) => this.addTodo(todo)} />
            </div>
        )
    }
}


// rconst ---- to get constructor