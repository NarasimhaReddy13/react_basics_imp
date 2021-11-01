import { Component } from "react";
import Switch from '@material-ui/core/Switch';

import TextField from "@material-ui/core/TextField";
import Input from '@material-ui/core/Input'

import Paper from '@material-ui/core/Paper'

import axios from 'axios'

class PostList extends Component {
    state = {userId: '', title: '', body: '', checkedA: true}

    changeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }
    // By making use of name attribut -- we won't want to write separate handlers

    handleChange() {
        this.setState((prevState) => { return {checkedA: !prevState.checkedA }})
    }

    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)   // 2ng arg is data that has to be sent
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        const {userId, title, body, checkedA} = this.state
        return(
            <div>
                <div>
                    <Paper elevation={3} variant='outlined' square> Hello </Paper>
                </div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type='text' name='userId' value={userId} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input type='text' name='title' value={title} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input type='text' name='body'value={body} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <TextField id="filled-basic" label="Filled" variant="filled" />
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                    </div>

                    <div>
                        {/* <Input defaultValue="Hello world" inputProps={{ 'aria-label': 'description' }} /> */}
                        <Input defaultValue="" placeholder='Narasimha' inputProps={{ 'aria-label': 'description' }} />
                    </div>
                    <button type='submit'> Submit </button>
                </form>
                <Switch checked={checkedA} onChange={() => this.handleChange()} name="checkedA" />
            </div>
        )
    }
}

export default PostList

//  <form noValidate autoComplete="off">