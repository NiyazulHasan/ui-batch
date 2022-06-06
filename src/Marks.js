import React, { Component } from 'react'

export default class Marks extends Component {
    //constructor
    constructor(props)
    {
        super(props);
        this.state={
            mroll:this.props.no
        }
    }
    //to update the value of state
    static getDerivedStateFromProps(props,state)
    {
            console.log("Marks - get Derived State From props");
            if(props.no !== state.mroll)
            {
                return {mroll:props.no};
            }
            return null;
    }
    shouldComponentUpdate(nextProps,nextState)
    {
        if(this.state.mroll < 105)
        {
            console.log("Marks - should component update ");
            console.log(nextProps,nextState);
            return true;
        }
        console.log(nextProps,nextState);
        return false;
    }
    //this method run before update 
    getSnapshotBeforeUpdate(prevProps,prevState)
    {
        console.log("Marks- get snapshot before update");
        console.log(prevProps,prevState);
        return 45;
    }
    //this method runs after updating
    componentDidUpdate(prevProps,prevState,snapshot)
    {   
            console.log("Marks - component did update ");
            console.log(prevProps,prevState,snapshot);
            
    }
    render() {
        console.log("Marks - rendered method");
        return (
            <div>
              <h1>{this.state.mroll}</h1>  
            </div>
        )
    }
}
