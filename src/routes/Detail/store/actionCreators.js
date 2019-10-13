import axios from 'axios'

const changeDetail = (data)=>{
    return {
        type: 'change_detail',
        title: data.title,
        content: data.content
    }
}
export const initDetail = (id)=>{
    return (dispatch)=>{
        axios.get('/api/detail.json?id='+id).then(res=>{
            dispatch(changeDetail(res.data))
        })
    }
}