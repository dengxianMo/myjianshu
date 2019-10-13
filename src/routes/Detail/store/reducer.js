const defaultState = {
    title: '',
    content: ''
}

export default (state = defaultState, action)=>{
    const newState =  JSON.parse(JSON.stringify(state));

    switch (action.type) {
        case 'change_detail':
            newState.title = action.title;
            newState.content = action.content;
            break;
    
        default:
            break;
    }

    return newState;
}