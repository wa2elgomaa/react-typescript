import { IRootState } from '../../types';
import { 
    START_TYPING,
    SEND_REQUEST, 
    IS_LOADING, 
    LOADING_ERROR,
    RESULTS_LOADED, 
    CLEAR_CACHE,
    CHANGE_TYPE, 
} from '../../constants';

const initialState: IRootState = {
    isLoading : false, 
    appError : '',
    text : '',
    type : 'issues'
};

export function rootReducer(state: IRootState = initialState, 
    action: any): IRootState {
        switch (action.type) {
            case START_TYPING:
                return { ...state , text : action.payload.text , appError : "" };
            case CHANGE_TYPE:
                return { ...state , type : action.payload.type , appError : "" };
            case SEND_REQUEST:
                return { ...state , text : action.payload.text , type : action.payload.type , appError : "" };
            case IS_LOADING:
                return { ...state , isLoading : true , appError : "" };
            case LOADING_ERROR:
                return { ...state , isLoading : false , appError : action.payload.error };    
            case RESULTS_LOADED:
            case CLEAR_CACHE:
                return { ...state , appError : "" , isLoading : false };        
            default:
                return state;
        }
}
