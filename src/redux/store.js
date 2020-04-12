import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './root-reducer';
import  rootSaga  from './api-saga';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const enhancer = compose(applyMiddleware(...middleware));

export const store = createStore(rootReducer, enhancer);

window.store = store;
sagaMiddleware.run(rootSaga);

export default store;