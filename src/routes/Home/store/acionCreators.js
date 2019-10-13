import axios from 'axios'

const initData = (data)=>{
    return {
        type: 'init_data',
        articleList: data.articleList,
        boardList: data.boardList
    }
}
export const getDataAC = ()=>{
    return (dispatch)=>{
        axios.get('/api/home.json').then(res=>{
            dispatch(initData(res.data))
        })
    }
}
const getMoreList = (data)=>{
    return {
        type: 'get_more_list',
        articleList: data
    }
}
export const getMoreAC = ()=>{
    return (dispatch)=>{
        axios.get('/api/homeList.json').then(res=>{
            dispatch(getMoreList(res.data))
        })
    }
}