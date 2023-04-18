import './index.css'

const Show = props => {
  const {send, deleted, show} = props

  const {id, website, username, password, active} = send
  const deletedItem = () => {
    deleted(id)
  }

  return (
    <li className="li">
      <h1 className="heading">{username[0]}</h1>
      <div className="para22">
        <p>{website}</p>
        <p>{username}</p>
        {show ? (
          <p>{password}</p>
        ) : (
          <img
            className="star"
            alt="stars"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
          />
        )}
      </div>
      <button
        onClick={deletedItem}
        data-testid="delete"
        className="btn1"
        type="button"
      >
        <img
          className="icon2"
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
        />
      </button>
    </li>
  )
}

export default Show
