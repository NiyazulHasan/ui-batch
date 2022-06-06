import React, { Component } from 'react'
import {MyContext} from "./App";
export default class Guest extends Component {
    render() {
        return (
            <div>
               <h2>Guest component</h2>
                <MyContext.Consumer>
                {data => <h4>Name :{data}</h4>}
                </MyContext.Consumer>
            </div>
        )
    }
}
