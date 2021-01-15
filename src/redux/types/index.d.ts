import { Item } from '../../types';
import { ActionType } from 'typesafe-actions';
import * as Actions from '../actions';


export interface IGithubState {
    data: Item[]
}

export interface IRootState {
    isLoading : boolean
    text: string
    type : string
    appError : string
}

export interface IStore {
    root: IRootState,
    github : IGithubState
}


export type RootActions = ActionType<typeof Actions>;
