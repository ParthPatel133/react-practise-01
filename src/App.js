import User from './User'
import Guest from './Guest'

import React, { Component } from 'react'

export default class App extends Component {
  state = {
    users: [
      { id: 101, name: 'first' },
      { id: 102, name: 'second' },
      { id: 103, name: 'third' }
    ],
    isLoggedIn: false
  }
  render() {
    const newUsers = this.state.users.map((user) => {
      return <h1> id: {user.id} and name: {user.name}</h1>
    })

    return (
     <div>
      {newUsers}
     </div>
    )
  }
}

