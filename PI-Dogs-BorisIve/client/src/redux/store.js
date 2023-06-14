import {legacy_createStore, applyMiddleware, compose} from "redux";
import reducer from "./reducer";
import thunkMiddleware from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))
);

export default store;