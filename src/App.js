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
      return <h1 key={user.id}> id: {user.id} and name: {user.name}</h1>
    })

    //***************  KEY IS ARGS BUT CAN NOT PASS AS PROPS TO COMPONENT *******
    return (
      <div>
        {newUsers}
      </div>
    )
  }
}

