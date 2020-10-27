import React, { Component } from 'react'

export default class Student extends Component {
    componentDidMount(){
        console.log('student mounted')
    }
    render() {
        console.log('student rendered')
        return (
            <div>
                <h1>hello student component</h1>
            </div>
        )
    }
}
