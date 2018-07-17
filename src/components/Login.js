import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Login extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                首页
                <Link to='/home'>到我家坐坐？</Link> 
            </div>
        )
    }
}

export default Login