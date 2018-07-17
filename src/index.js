import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import App from './App';
import routerRoutes from '@/router/rootRoutes.js'
import registerServiceWorker from './registerServiceWorker';
import store from './store/index.js';

var routelist = []

routerRoutes.routes.map((item, index) => {
    routelist.push(<Route key={index} to={item.path} component={item.component} />)
})

function render () {
    ReactDOM.render(
        <Router>
            <Switch>
                {routelist}
            </Switch>
        </Router>
    , document.getElementById('root'))
}

render ();

store.subscribe(render);

registerServiceWorker();
