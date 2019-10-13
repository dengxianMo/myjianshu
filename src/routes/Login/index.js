import React, {Component} from 'react'
import {connect} from 'react-redux'
import {actionCreator} from './store'
import {Redirect} from 'react-router-dom'
import {
    LoginWrapper,
    LoginBox,
    Input,
    Button
} from './style'

class Login extends Component{
    render(){
        if(this.props.login){
            return <Redirect to="/" />
        }
        return (
            <LoginWrapper>
                <LoginBox>
                    <Input placeholder="账号" type="text" ref={self=>{this.account = self}} />
                    <Input placeholder="密码" type="password" ref={self=>{this.password = self}} />
                    <Button onClick={()=>{this.props.handleLogin(this.account, this.password)}}>登录</Button>
                </LoginBox>
            </LoginWrapper>
        )
    }
}
const mapState = (state)=>({
    login: state.login.login
})
const mapDispatch = (dispatch)=>{
    return {
        handleLogin(accountElem, passwordElem){
            dispatch(actionCreator.sendLogin(accountElem.value, passwordElem.value))
        }
    }
}

export default connect(mapState, mapDispatch)(Login)