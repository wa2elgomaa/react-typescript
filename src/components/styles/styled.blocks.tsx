import styled, { css } from 'styled-components';
import {InputProps} from '../../types';

// styles for input component
export const DefaultInput = css<InputProps>`{
    padding:10px;
    border:1px solid ${props => props.color || '#828282'};
    border-radius: 2px;
    font-size: 16px;
    height:50px;
    color : #828282;
}`

export default {DefaultInput};

