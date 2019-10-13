const defaultState = {
    articleList: [],
    boardList: []
}

export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'init_data':
            newState.articleList = action.articleList;
            newState.boardList = action.boardList;
            break;
        case 'get_more_list':
            newState.articleList = [...newState.articleList, ...action.articleList];
            break;
        default:
            break;
    }
    return newState
}