import './I_2_UserList.css'

const UserProfile = props => {
  const {userDetails, deleteUser} = props
  const {imageUrl, name, role, uniqueNo} = userDetails

  const onDelete = () => {
      deleteUser(uniqueNo)
  }

  return (
    <li className="user-card-container">
      <img src={imageUrl} className="avatar" alt="avatar" />

      <div className="user-details-container">
        <div>
            <h1 className="user-name"> {name} </h1>
            <p className="user-designation"> {role} </p>
        </div>
        <button className="delete-symbol" onClick={onDelete} > <img src="https://assets.ccbp.in/frontend/react-js/cross-img.png" alt="cross" className="delete-symbol1"/></button>
      </div>
    </li>
  )
}
export default UserProfile