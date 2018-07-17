import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Kind extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                首页
                <Link to='/cart'>瞅瞅有多少东西</Link> 
            </div>
        )
    }
}

export default Kind