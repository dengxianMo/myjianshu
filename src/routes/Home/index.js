import React, {Component} from 'react'
import {List, Board} from './components'
import {actionCreator} from './store'
import {connect} from 'react-redux'
import {
    HomeWrapper,
    HomeLeft,
    HomeRight
} from './style'

class Home extends Component{
    render(){
        return (
            <HomeWrapper>
                <HomeRight>
                    <Board />
                </HomeRight>
                <HomeLeft>
                    <List />
                </HomeLeft>
            </HomeWrapper>
        )
    }
    componentDidMount(){
        this.props.getHomeData()
    }
}

const mapDispatch = (dispatch)=>{
    return {
        getHomeData(){
            dispatch(actionCreator.getDataAC())
        }
    }
}
export default connect(null, mapDispatch)(Home)