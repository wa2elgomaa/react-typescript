import * as ReduxTypes from '../redux/types';

/*
This file contains all the selectors used in the applications in order to unify how selection from state happens 
For any future changes in the state keys or reducers the change will be in a single file 
*/
export function selectTypeFromState(state : ReduxTypes.IStore){
    return state?.root?.type;
}
export function selectTextFromState(state : ReduxTypes.IStore){
    return state?.root?.text;
}
export function selectErrorMessageFromState(state : ReduxTypes.IStore){
    return state?.root?.appError;
}
export function selectLoadingStatusFromState(state : ReduxTypes.IStore){
    return state?.root?.isLoading;
}
export function selectDataFromState(state : ReduxTypes.IStore){
    return state?.github?.data || [];
}