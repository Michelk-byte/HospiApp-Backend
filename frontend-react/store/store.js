import {createStore,applyMiddleware} from "redux";
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from "../sagaCalls/rootSaga"
import allReducer from "../Reducers/CombinedReducers.js";

const sagaMiddleware = createSagaMiddleware()

export const store=createStore(allReducer,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);