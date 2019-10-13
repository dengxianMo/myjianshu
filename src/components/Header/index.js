import React, {Component} from 'react'
import {connect} from 'react-redux'
import {actionCreators} from './store'
import {actionCreator as loginActionCreators} from '../../routes/Login/store'
import {Link} from 'react-router-dom'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    Addition,
    Button,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem
} from './style'


let spinDOM;
class Header extends Component{
    render(){
        const {
            list,
            nowPage,
            allPage,
            handlerGetList,
            handleChangePage,
            login,
            handleLogOut
        } = this.props;
        return(
            <HeaderWrapper>
                <Link to="/">
                    <Logo />
                </Link>
                
                <Nav>
                    <Link to="/">
                        <NavItem className="left active">首页</NavItem>
                    </Link>
                    <NavItem className="left">下载App</NavItem>

                    {
                        login? (
                            <NavItem className="right" onClick={handleLogOut}>退出</NavItem>
                        ):(
                            <Link to="/login">
                                <NavItem className="right">登录</NavItem>
                            </Link>
                        )
                    }


                    <NavItem className="right">
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <NavSearch onFocus={()=>{handlerGetList(allPage)}} />
                        <i className='iconfont so'>&#xe62d;</i>
                        <SearchInfo className="info">
                            <SearchInfoTitle>
                                热门搜索
                                <SearchInfoSwitch onClick={()=>{handleChangePage(nowPage, allPage)}}>
                                    <i ref={spin=>{spinDOM = spin}} style={{transform: "rotate(90deg)"}} className="iconfont spin">&#xe618;</i>换一批
                                </SearchInfoSwitch>
                            </SearchInfoTitle>
                            <div>
                                {
                                    this.getInfoItem(nowPage, allPage, list)
                                }
                            </div>
                        </SearchInfo>
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className="writting">
                        <i className="iconfont">&#xe60d;</i>写文章
                    </Button>
                    <Button className="register">注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
    getInfoItem(nowPage, allPage, list){
        let len = list.length;
        if(len === 0) return
        let res = [], start = (nowPage - 1) * 10,end = (nowPage === allPage)?  len-1 : start+10
        for(; start<=end; start++){
            res.push(<SearchInfoItem key={list[start]}>{list[start]}</SearchInfoItem>)
        }
        return res
    }

}

const mapStateToProps = (state)=>{
    return {
        ...state.header,
        login: state.login.login
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        handlerGetList(allPage){
            if(allPage===0){
                dispatch(actionCreators.getList());
            }
        },
        handleChangePage(nowPage, allPage){
            let nowAngle = +spinDOM.style.transform.replace(/[^0-9]/g, '')+360;
            spinDOM.style.transform = 'rotate('+nowAngle+'deg)';

            let tarPage = nowPage===allPage? 1:nowPage+1;
            dispatch(actionCreators.changePage(tarPage));
        },
        handleLogOut(){
            dispatch(loginActionCreators.logOut())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)