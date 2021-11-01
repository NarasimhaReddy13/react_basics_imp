import React, {Component} from 'react'

class Form extends Component {
    state = { comments: '', topic: 'React' }

    handleCommentsChange = (event) => {
        this.setState({comments: event.target.value})
    }
    onTopicChange = (event) => {
        this.setState({topic: event.target.value})
    }
    handleSubmit = (event) => {
        alert(`${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }

    render() {
        // we can destructure here const {username,comments,topic} = this.state --- and we can remove this.state in value
        return(
            <form onSubmit = {this.handleSubmit}>
                <div>
                    <label> Comments </label> <br/>
                    <textarea value={this.state.comments} onChange={this.handleCommentsChange} rows='10' cols='20'></textarea>
                </div>
                <div>
                    <label> Topic </label> <br/>
                    <select value={this.state.topic} onChange={this.onTopicChange}>
                        <option value="React"> React </option>
                        <option value="Vue"> Vue </option>
                    </select>
                </div>
                <button type="submit"> Submit </button>
            </form>
        )
    }
}

export default Form



// Error as <td> can't be appeared in div. --- to solve this replace div with React.fragment or <> -- another component
// React.fragment accepts only key attribute 