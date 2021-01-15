import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducers from '../reducers/index';
import sagas from '../sagas';


const logger = createLogger({
  level: 'log'
});

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage
}

const persistCombinedReducers = persistCombineReducers(persistConfig, {
  root: reducers.rootReducer,
  github: reducers.githubReducer
});

const store = createStore(
  persistCombinedReducers,
  applyMiddleware(
    sagaMiddleware,
    logger
  ),
);



const persistor = persistStore(store);

// then run the saga
sagaMiddleware.run(sagas);

export { store, persistor };
