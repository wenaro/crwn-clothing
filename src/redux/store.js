import logger from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './root-reducer'
import persistStore from 'redux-persist/lib/persistStore';

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);