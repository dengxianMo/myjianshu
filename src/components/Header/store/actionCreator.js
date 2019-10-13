import * as constants from './constants'
import axios from 'axios'

const initData = (data)=>{
    return {
        type: constants.CHANGE_LIST,
        data,
        allPage: Math.ceil(data.length/10)
    }
}
export const getList = ()=>{
    return (dispatch)=>{
        axios.get('/api/headerList.json').then((res)=>{
            dispatch(initData(res.data))
        }).catch(()=>{console.log('err')})
    }
}
export const changePage = (tarPage)=>{
    return {
        type: constants.CHANGE_PAGE,
        tarPage
    }
}