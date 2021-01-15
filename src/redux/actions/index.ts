import { action } from 'typesafe-actions';
import * as Constants from '../constants';
import { Item } from '../../types';

export  function StartTyping(text: string) {    
    return action(Constants.START_TYPING , {
        text
    });
}

export  function ChangeType(type: string) {    
    return action(Constants.CHANGE_TYPE , {
        type
    });
}

export function SendRequest(text: string , type : string) {
    return action(Constants.SEND_REQUEST, {
        text , type
    });
}

export function IsLoading(loading: boolean) {
    return action(Constants.IS_LOADING, {
        loading
    });
}

export function ResultsLoaded(data: Item[]) {
    return action(Constants.RESULTS_LOADED, {
        data
    });
}

export function LoadingError(error: string) {
    return action(Constants.LOADING_ERROR, {
        error
    });
}

export function ClearCache() {
    return action(Constants.CLEAR_CACHE);
}
