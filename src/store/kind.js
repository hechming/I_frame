
const kinddata = (state = {
    kindlist: []
}, {type, data}) => {
    if(type === 'KIND_LIST'){
        state.kindlist = data
    }
    return state
}

export default kinddata