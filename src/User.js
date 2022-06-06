import React, { Component } from 'react'
import Guest from "./Guest"
export default class User extends Component {
    render() {
        return (
            <div>
               <h1>User component</h1>
               <Guest/>
            </div>
        )
    }
}
