import React, { Component } from 'react'
import { connect } from 'react-redux'
import {login, doAuthentication, logout } from '../actions'
import Auth from '../components/Auth'

class App extends Component {
  constructor(props) {
    super(props)
    this.handleLoginClick = this.handleLoginClick.bind(this)
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
    this.props.doAuthentication()
  }


  handleLoginClick() {
    this.props.login()
  }

  handleLogoutClick() {
    this.props.logout()
  }

  render() {
    const {isAuthenticated, profile } = this.props
    return (
      <div>
        <div className="navbar navbar-default">
          <div className="container-fluid">
            <a className="navbar-brand">Redux Jedi</a>
            <Auth
              isAuthenticated={isAuthenticated}
              profile={profile}
              onLoginClick={this.handleLoginClick}
              onLogoutClick={this.handleLogoutClick}
            />
          </div>
        </div>

      
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { auth } = state

  const { isAuthenticated, profile } = auth
  return {
    isAuthenticated,
    profile
  }
}

export default connect(mapStateToProps, {
  login,
  doAuthentication,
  logout
})(App)