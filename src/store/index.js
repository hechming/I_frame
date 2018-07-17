import {createStore, combineReducers} from 'redux'
import kinddata from './kind.js'
import homedata from './home.js'

const reducer = combineReducers({
    kinddata,
    homedata
})

const store = createStore(reducer)

export default store