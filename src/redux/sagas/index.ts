import { all, call, put, take, takeLatest , delay , cancel ,fork } from 'redux-saga/effects';
import * as Constants from '../constants';
import { fetchData } from '../../services';
import { ResultsLoaded  ,  LoadingError , IsLoading } from '../actions';
import * as URLS from '../../constants';
import {ServerResponse} from '../../types';

export function* sendRequestGenerator(payload : any) {
    // direct call 
    // let LOCAL_FETCH_API = format(URLS.LIVE_FETCH_API , payload.type , payload.text);
    yield put(IsLoading(true));
    const resp: ServerResponse = yield call(fetchData, URLS.LOCAL_FETCH_API , payload);
    yield put(IsLoading(false));

    if(resp.status == 200){
        yield put(ResultsLoaded(resp.results));
    }else {
        yield put(LoadingError(resp.statusText || ""));
    }
}

export function* sendRequestGeneratorWatcher() {
  // use built in debouncing in sagas  
  let task
  while (true) {
    const {payload} = yield take(Constants.SEND_REQUEST);
    if (task) {
      yield cancel(task);
    }
    task = yield fork(sendRequestGenerator, payload);
  }
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([call(sendRequestGeneratorWatcher)])
}