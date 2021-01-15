import * as React from 'react';
import { useDispatch , useSelector , } from "react-redux";
import * as Actions from '../redux/actions';
import { MainProps ,  Item } from '../types';
import { Dispatch } from 'redux';
import { 
  selectTypeFromState , 
  selectDataFromState , 
  selectErrorMessageFromState , 
  selectLoadingStatusFromState , 
  selectTextFromState 
} from '../utils/selectors';

// components 
import Input from '../components/input';
import Select from '../components/select';
import ListItem from '../components/ListItem';

// styles
import {Main, Section , SectionList, SectionLogo , SectionDiv , SectionError } from './styled.Home';

// assets 
const logo = require('../assets/imgs/logo.svg');


export function Home(props : MainProps) {
  // dispatchs 
  const dispatch: Dispatch<any> = useDispatch()
  const sendRequest = (text : string , type : string) => dispatch(Actions.SendRequest(text , type));
  const changeType = (type : string) => dispatch(Actions.ChangeType(type));
  const emptyResults = () => dispatch(Actions.ClearCache());
  const startTyping = (text : string) => dispatch(Actions.StartTyping(text));
  //end dispatches 

  // selectors 
  const errorMessage = useSelector(selectErrorMessageFromState);
  const items = useSelector(selectDataFromState);
  const isLoading = useSelector(selectLoadingStatusFromState);
  const text = useSelector(selectTextFromState);
  const type = useSelector(selectTypeFromState);

  function inputChanged(value : string) {
    // dispatch hook & fire action
    (checkTextInputValue(value)) && sendRequest(value, type);
    // change store text value
    startTyping(value);
    // empty results 
    !value.length && emptyResults();
  }
  function selectChanged(selected : string) {
    // dispatch request to load the result
    (checkDataFromState(selected)) && sendRequest(text, selected);
    // change type in store
    changeType(selected);
  }
  function checkDataFromState(selected : string){
    return selected != type && text.length >= 3;
  }
  function checkTextInputValue(textInput : string ) : boolean{
     return textInput != text && textInput.length >= 3;
  }
  return (
    <Main resultsView={text.length >= 3}>
      <Section>
          <SectionLogo src={logo} width={43} height={43} alt="Github logo" />
          <SectionDiv>
            <h3>
              GitHub Searcher
            </h3>
            <p>
              Search users or repositories below
            </p>
          </SectionDiv>
      </Section>
      <Section>
        <Input name="search" value={text} placeholder='Start typing to search ..' onChange={inputChanged} />
        <Select options={["users","repositories","issues"]} selected={type} onChange={selectChanged} />
      </Section>
      {isLoading && <div>
          Loading Results ... 
      </div>}
      <SectionList>
        {
          items.length ? items.map((item : Item , _key : number)=>{
            return <ListItem key={_key} item={item} />
          }) : null
        }
      </SectionList>
      {errorMessage ?  <SectionError>
          An error occured please check with your administrator, {errorMessage}
      </SectionError> : null}
    </Main>
  );
}


export default Home;
