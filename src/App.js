import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import logo from './logo.svg';
import appRoutes from '@/router/appRoutes.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
        {
          appRoutes.map((item, index) => {
            return (<Route to={item.path} component={item.component} />)
          })
        }
        <Redirect to={{pathname: '/home'}} />
       </Switch>
      </div>
    );
  }
}

export default App
