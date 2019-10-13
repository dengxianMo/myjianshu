import React, {Component} from 'react'
import {connect} from 'react-redux'
import {BoardWarp} from '../style'

class Board extends Component{
    render(){
        const boardList = this.props.boardList;
        return (
            <BoardWarp>
                {
                    boardList.map((item)=>{
                        return (
                            <a key={item.id} href={item.href} target="_blank" rel="noopener noreferrer">
                                <img src={item.img} alt=""/>
                            </a>
                        )
                    })
                }
            </BoardWarp>
        )
    }
}

const mapState = (state)=>{
    return {boardList: state.home.boardList}
}
export default connect(mapState, null)(Board)