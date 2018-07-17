import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Detail extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                详情
                <Link to='/login'>先进来吧你</Link> 
            </div>
        )
    }
}

export default Detail