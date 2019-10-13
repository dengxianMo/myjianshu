const defaultState = {
    login: false
}
export default (state = defaultState, action)=>{
    const newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'change_login':
            newState.login = action.val;
            break;
    
        default:
            break;
    }
    return newState
}