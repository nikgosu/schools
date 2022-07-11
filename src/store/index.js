import {applyMiddleware, legacy_createStore as createStore} from 'redux'
import {initialState, reducer} from "./reducers"
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from 'redux-thunk';

const mw = [thunk]

export const store = createStore(reducer, initialState, composeWithDevTools(
	applyMiddleware(...mw)
))