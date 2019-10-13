import axios from 'axios'

const changeLogin = (flag)=>({
    type: 'change_login',
    val: flag
})
export const sendLogin = (account, password)=>{
    return (dispatch)=>{
        axios.get('/api/login.json?account='+account+'&password='+password).then(res=>{
            const result = res.data.data;
            if(result){
                dispatch(changeLogin(true))
            }else{
                alert('登陆失败')
            }
        })
    }
}
export const logOut = ()=>{
    return (dispatch)=>{
        axios.get('/api/logout.json').then(res=>{
            dispatch(changeLogin(res.data.data))
        })
    }
}