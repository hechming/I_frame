import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class User extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                首页
                <Link to='/kind'>瞅瞅分类</Link> 
            </div>
        )
    }
}

export default User