import styled from 'styled-components';
import { MainProps  } from '../types';

// styles 
export const Main = styled.main<MainProps>`{
    max-width: 1170px;  
    display:inline-block;
    margin-top: ${props => props.resultsView ? '20px' : '300px'};
    transition: margin 0.6s ease-in-out;
}`

export const Section = styled.section`{
  display: flex;
  justify-content: left;
  margin-bottom:20px;
  > p {
    color : #828282;
  }
}`;


export const SectionList = styled.section`{
  display: flex;
  justify-content: center;
  margin-bottom:20px;
  flex-wrap: wrap;
}`;

export const SectionDiv = styled.div`{
    display: flex;
    flex-direction: column;
    justify-content: center;
}`;
export const SectionLogo = styled.img`{
  margin-right:10px;
}`;

export const SectionError = styled.div`{
  color : red;
  margin-bottom:20px;
}`;

