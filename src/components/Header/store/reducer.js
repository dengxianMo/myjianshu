import * as constants from './constants'
const defaultState = {
    focused: false,
    list: [],
    nowPage: 1,
    allPage: 0
};
export default (state = defaultState, action)=>{
    const newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case constants.CHANGE_LIST:
            newState.list = action.data;
            newState.allPage = action.allPage;
            break;
        case constants.CHANGE_PAGE:
            newState.nowPage = action.tarPage;
            break;
        default:
            break;
    }
    return newState
}