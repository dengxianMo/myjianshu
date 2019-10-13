import React, {Component} from 'react'
import {connect} from 'react-redux'
import {actionCreator} from '../store'
import {Link} from 'react-router-dom'
import {
    ListWrap,
    ListItem,
    ItemInfo,
    LoadMore
} from '../style'

class List extends Component{
    render(){
        const articleList = this.props.articleList;
        return (
            <ListWrap>
                {
                    articleList.map((item)=>{
                        return (
                            <ListItem  key={item.id}>
                                <ItemInfo>
                                    <Link className="title" to={"/detail/"+item.href}>{item.title}</Link>
                                    <p>{item.p}</p>
                                    <div className="meta">{item.meta}</div>
                                </ItemInfo>
                                <Link to="/detail">
                                    <img src={item.img} alt=""/>
                                </Link>
                            </ListItem>
                        )
                    })
                }
                <LoadMore onClick={this.props.getMoreList}>阅读更多</LoadMore>
            </ListWrap>
        )
    }
}

const mapState = (state)=>{
    return {articleList: state.home.articleList}
}
const mapDispatch = (dispatch)=>{
    return {
        getMoreList(){
            dispatch(actionCreator.getMoreAC())
        }
    }
}

export default connect(mapState, mapDispatch)(List)