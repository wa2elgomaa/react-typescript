import styled from 'styled-components';
import {DefaultInput} from '../styles/styled.blocks';


// styles for select component
export const SelectWrapper = styled.div`{

}`

// styles for select component
export const StyledSelect = styled.select`{
    ${DefaultInput}
    width:125px;
    outline: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    &::-ms-expand { display: none };
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='8' height='8' fill='%23828282' ><polygon points='0,0 8,0 4,4'/></svg>");
    background-position: right 10px center;
    background-repeat: no-repeat;
    background-size: auto 25%;
}`
