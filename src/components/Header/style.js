import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 56px;
    background: url(${logoPic});
    background-size: contain;
    cursor: pointer;
`;

export const Nav = styled.div`
    width: 960px;
    height: 100%;
    margin: 0 auto;
    padding: 0 60px 0 0;
    box-sizing: border-box;
    // background:green;
`;
export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 12px;
    margin-right: 15px;
    font-size: 17px;
    color: #333;
    cursor: pointer;
    &.left{
        float: left;
    }
    &.right{
        float: right;
        color: #969696;
    }
    &.active{
        color: #ea6f5a;
    }
`;

export const SearchWrapper = styled.div`
    float:left;
    position: relative;
    .so{
        position: absolute;
        right: 4px;
        bottom: 4px;
        font-size: 18px;
        text-align: center;
        width: 30px;
        line-height:30px;
        border-radius: 15px;
        cursor: pointer;
    }
`;
export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    padding: 0 40px 0 20px;
    margin: 9px 0 0 10px;
    width: 160px;
    height: 38px;
    color: #777;
    box-sizing: border-box;
    border: none;
    outline: none;
    font-size: 14px;
    border-radius: 19px;
    background: #eee;
    transition: width .5s;
    &::placeholder{
        color: #999
    }
    &:focus{
        width: 255px;
    }
    &:focus+.so{
        background: #969696;
        color: #fff;
    }
    &:focus~.info{
        display: block
    }
`;
export const SearchInfo = styled.div`
    position: absolute;
    display: none;
    top: 57px;
    left: 0;
    width: 210px;
    padding: 20px 20px 10px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    z-index: 2;
    :hover{
        display: block !important;
    }
    ::after{
        content:'';
        position: absolute;
        top: -24px;
        width: 0;
        height: 0;
        border: 12px solid transparent;
        border-bottom: 12px solid #fff;
    }
`;
export const SearchInfoTitle = styled.div`
    height: 20px;
    margin-bottom: 10px;
    font-size:14px;
    color: #969696;
`;
export const SearchInfoSwitch = styled.a`
    font-size: 13px;
    float: right;
    cursor: pointer;
    .spin{
        font-size:13px;
        float: left;
        transition: transform .5s ease;
        transform-origin: center center;
    }
`;
export const SearchInfoItem = styled.a`
    padding: 0 6px;
    float: left;
    margin: 5px 10px 5px 0;
    font-size: 12px;
    line-height: 18px;
    border: 1px solid #ddd;
    border-radius: 3px;
    color: #787878;
    cursor: pointer;
    &:hover{
        color: #333;
        border-color: #b4b4b4;
    }
`;

export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`;
export const Button = styled.div`
    float: right;
    margin: 9px 15px 0 0;
    padding: 0 20px;
    line-height: 38px;
    border: 1px solid #ea6f5a;
    border-radius: 19px;
    cursor: pointer;
    &.register{
        color: #ec6149;
    }
    &.writting{
        color: #fff;
        background: #ea6f5a;
    }
`;