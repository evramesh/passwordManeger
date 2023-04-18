import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import Show from '../numberlist/listitems'

import './index.css'

class Password extends Component {
  state = {
    passwordList: [],
    website: '',
    username: '',
    password: '',
    userSearch: '',
    show: false,
  }

  submitPassword = event => {
    event.preventDefault()
    const {website, username, password, passwordList} = this.state
    const newList = {
      id: uuidv4(),
      website,
      username,
      password,
      active: false,
    }
    this.setState(prevState => ({
      passwordList: [...prevState.passwordList, newList],
    }))
    this.setState({website: '', username: '', password: ''})
  }

  websiteClick = event => {
    this.setState({website: event.target.value})
  }

  userNameClick = event => {
    this.setState({username: event.target.value})
  }

  passwordClick = event => {
    this.setState({password: event.target.value})
  }

  userSearch = event => {
    const {userSearch} = this.state
    this.setState({userSearch: event.target.value})
  }

  deleted = id => {
    const {passwordList} = this.state
    const del = passwordList.filter(each => each.id !== id)
    this.setState({passwordList: del})
  }

  status = event => {
    this.setState({show: event.target.checked})
  }

  render() {
    const {
      passwordList,
      website,
      username,
      password,
      userSearch,
      show,
    } = this.state
    const filterList = passwordList.filter(eachSearch =>
      eachSearch.website.toLowerCase().includes(userSearch.toLowerCase()),
    )

    return (
      <form onSubmit={this.submitPassword}>
        <div className="container">
          <img
            className="logo"
            alt="app logo"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          />
          <div className="parent">
            <div className="main">
              <h1 className="para">Add New Password</h1>
              <img
                className="icon"
                alt="website"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
              />
              <input
                value={website}
                onChange={this.websiteClick}
                placeholder="Enter Website"
                className="in"
              />
              <img
                className="icon"
                alt="username"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
              />
              <input
                value={username}
                onChange={this.userNameClick}
                placeholder="Enter Username"
                className="in"
              />
              <img
                className="icon"
                alt="password"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
              />
              <input
                value={password}
                onChange={this.passwordClick}
                type="password"
                placeholder="Enter Password"
                className="in"
              />
              <button className="btn" type="submit">
                Add
              </button>
            </div>
            <div>
              <img
                className="img"
                alt="password manager"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              />
            </div>
          </div>
          <div className="parent1">
            <div className="left">
              <h1 className="para">Your Passwords</h1>
              <p>{passwordList.length}</p>
              <div>
                <img
                  className="icon"
                  alt="search"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                />
                <input
                  value={userSearch}
                  placeholder="search"
                  onChange={this.userSearch}
                  type="search"
                />
              </div>
            </div>
            <hr />
            <input
              onClick={this.status}
              value="check"
              id="check"
              type="checkbox"
            />
            <label className="para" htmlFor="check">
              Show passwords
            </label>
            <ul className="ul">
              {filterList.length === 0 ? (
                <div>
                  <img
                    className="img1"
                    alt="no passwords"
                    src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  />
                  <p className="para">No Passwords</p>
                </div>
              ) : (
                filterList.map(eachItem => (
                  <Show
                    show={show}
                    deleted={this.deleted}
                    key={eachItem.id}
                    send={eachItem}
                  />
                ))
              )}
            </ul>
          </div>
        </div>
      </form>
    )
  }
}

export default Password
