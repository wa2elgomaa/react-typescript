import styled from 'styled-components';

// styles for input component
export const ListItemWrapper = styled.div`{
    background:#f8f8f8;
    border: 1px solid #ddd;
    border-radius: 7px;
    padding : 10px;
    margin: 2px;
    flex-grow: 1;
    width: 32%;
    @media only screen and (max-width: 768px) {
      width: 48%;
    }

}`

// styles for input component
export const StyledListItem = styled.div`{
    display:flex;
    
    img {
        max-width : 100%;
    }
}`

// styles for input component
export const ListItemLink = styled.a`{
    display:inline-block;
    overflow:hidden;
    border-radius: 50%;
    height: 80px;
    width: 80px;
}`

export const ListItemDetails = styled.div` {
    display: flex;
    flex-direction:column;
    justify-content: center;
    padding: 0 10px;
    
    label {
        color : #787878;
    }
    > div {
        margin-right : 10px;
    }
    
}`

export const Star = styled.img`{
    width:15px;
}`