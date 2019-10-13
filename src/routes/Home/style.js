import styled from 'styled-components'

export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
`;
export const HomeLeft = styled.div`
    width: 625px;
    padding: 15px 0 0 15px;
`;
export const ListWrap = styled.ul`
    margin-top: 10px;
`;
export const ListItem = styled.li`
    height: 124px;
    padding: 30px 0 20px 0;
    border-bottom: 1px solid #f0f0f0;
    position: relative;

    img{
        position: absolute;
        top: 50%;
        margin-top: -60px;
        right: 0;
        width: 150px;
        height: 100px;
        font-size: 0px;
    }
`;
export const ItemInfo = styled.div`
    width: 458px;
    height: 100%;
    background: #fff;
    .title{
        margin: -10px 0 4px;
        font-size: 18px;
        font-weight: 700;
        line-height: 1.5;
        color: #333;
        &:visited{
            color: #969696;
        }
    }
    p{
        margin: 0 0 8px;
        font-size: 13px;
        line-height: 24px;
        color: #999;
    }
    .meta{
        font-size: 12px;
        font-weight: 400;
        line-height: 24px;
        color: #b4b4b4;
    }
`;
export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #fff;
    border-radius: 20px;
    background-color: #a5a5a5;
    margin: 30px auto 60px;
`;


export const HomeRight = styled.div`
    width: 280px;
    float: right;
    height: 200px;
    padding-top: 25px;
`;
export const BoardWarp = styled.div`
    a{
        font-size: 0;
    }
    img{
        width: 100%;
        margin: 0 0 4px 0;
    }
`;