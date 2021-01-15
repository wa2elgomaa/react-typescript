import { IGithubState , RootActions} from '../../types';
import { 
    RESULTS_LOADED,
    LOADING_ERROR, 
    CLEAR_CACHE  
} from '../../constants';



const initialState: IGithubState = {
    data : [] 
};

export function githubReducer(state: IGithubState = initialState, 
action: RootActions): IGithubState {
    switch (action.type) {
        case RESULTS_LOADED:
            return { ...state , data : action.payload.data };
        case LOADING_ERROR:
            return { ...state , data : [] };
        case CLEAR_CACHE:
            return { ...state , data : []  };
        default:
            return state;
    }
}

    