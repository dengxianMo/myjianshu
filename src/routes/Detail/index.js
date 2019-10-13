import React, {Component} from 'react'
import {connect} from 'react-redux'
import {actionCreator} from './store'
import {withRouter} from 'react-router-dom'
import {
    DetailWrapper,
    Note,
    Title,
    Content
} from './style'

class Detail extends Component{
    render(){
        console.log(this.props)
        return (
            <DetailWrapper>
                <Note>
                    <Title>{this.props.title}</Title>
                    <Content dangerouslySetInnerHTML={{__html: this.props.content}} />
                </Note>
            </DetailWrapper>
        )
    }
    componentDidMount(){
        console.log(this.props)
        this.props.getData(this.props.match.params.id)
    }
}

const mapState = (state)=>{
    return {...state.detail}
}
const mapDispatch = (dispatch)=>{
    return{
        getData(id){
            dispatch(actionCreator.initDetail(id));
        }
    }
}

export default connect(mapState, mapDispatch)(withRouter(Detail))