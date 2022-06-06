import React, { Component } from 'react'

export default class Student extends Component {
    componentDidMount()
    {
        console.log("Student Mounted");
    }

    render() {
        console.log("Student- rendered method");
        return (
            <div>
                <h1>Student Component </h1>
            </div>
        )
    }
}
