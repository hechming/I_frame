import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Register extends Component{
    constructor(props){
        super(props)
    }
    go(){
        this.props.history.push('/login')
    }
    render(){
        return (
            <div>
                首页
                <div onClick = {this.go.bind(this)}>先进来吧你</div> 
            </div>
        )
    }
}

export default Register