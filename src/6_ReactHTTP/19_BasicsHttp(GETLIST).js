// Web Application(send)  ------------ Server(fetch)
// As React is a library for UI (only render).. it is in no way concerned about HTTP 
// Then how we make API(ajax) calls ? ----  Using HTTP Library (axios)

import { Component } from "react";
import axios from 'axios'

// Where do we place the code to make GET Request --- In the componentDidMount() lifecycle method -- only once executed

class GetList extends Component {
    state = {posts: [], errorMsg: ''}

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            this.setState({posts: response.data})
        })
        .catch(error => {
            this.setState({errorMsg: "Error in Retriving Data"})
        })
    }

    render(){
        // const {posts, errorMsg} = this.state
        return(
            // <div> 
            //     List Of Posts
            //     {
            //         posts.length ? posts.map(post => <div key={post.id}> {post.title} </div> ): null
            //     }
            //     { errorMsg ? <div> {errorMsg} </div> : null}
            // </div>
            <div> Props </div>
        )
    }
}

export default GetList