import {combineReducers} from 'redux'
import {reducer as headerReducer} from '../components/Header/store'
import {reducer as homeReducer} from '../routes/Home/store'
import {reducer as detailReducer} from '../routes/Detail/store'
import {reducer as loginReducer} from '../routes/Login/store'

export default combineReducers({
    header: headerReducer,
    home: homeReducer,
    detail: detailReducer,
    login: loginReducer
})