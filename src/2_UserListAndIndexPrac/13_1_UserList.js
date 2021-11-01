import { Component } from 'react'
import UserProfile from './I_2_UserList2'

const mainContainer = {
  marginTop: '50px'
}

const searchStyle = {
  width: '50%',
  height: '45px',
  bordeRadius: '8px',
  padding: '10px',
  outline: 'none'
}


const initialUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Ram',
    role: 'Software Developer'
  },
  {
    uniqueNo: 2,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Praveena',
    role: 'Software Developer'
  }
]


class FinalUsersList extends Component {
    state = {
        searchInput: '',
        userDetailsList: initialUserDetailsList
    }

    onChangeSearchInput = (event) => {
        this.setState({searchInput: event.target.value})
    }

    deleteUser = (uniqueNo) => {
        const {userDetailsList} = this.state
        const filteredUserDetailsList = userDetailsList.filter(each => each.uniqueNo !== uniqueNo)

        this.setState({userDetailsList: filteredUserDetailsList})
    }

    render() {
        const {searchInput, userDetailsList} = this.state
        const searchResults = userDetailsList.filter( eachUser => eachUser.name.includes(searchInput))

        return(
            <div style={mainContainer}>
                <h1 className="user-list-heading"> Users List </h1>
                <input type='search' value={searchInput} onChange={this.onChangeSearchInput} style={searchStyle}/>

                <ul className="">
                    {searchResults.map(each => (<UserProfile userDetails={each} key={each.uniqueNo} deleteUser={this.deleteUser}/>))}
                </ul>
            </div>
        )
    }

}

export default FinalUsersList