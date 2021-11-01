import React, { Component } from 'react'

class LocalAndSessionStorage extends Component {

    setData() {
        let obj = {name: 'John', age:12, email: 'nara@gmail.com'}
        localStorage.setItem('myData', JSON.stringify(obj))


        sessionStorage.setItem('mySessionStorage', JSON.stringify(obj))
    }
    getData(){
        let data = localStorage.getItem('myData')
        console.log(JSON.parse(data))

        let sessionData = sessionStorage.getItem('mySessionStorage')
        console.log(JSON.parse(sessionData))
    }

    render() {
        return (
            <div>
                <button onClick={() => this.setData()}> Set Data </button>

                <button onClick={() => this.getData()}> Get Data </button>
            </div>
        )
    }
}

export default LocalAndSessionStorage
