import {applyMiddleware, legacy_createStore as createStore} from 'redux'
import {reducer} from "./reducers"
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from 'redux-thunk';
import {initialState} from "./initState"

const mw = [thunk]

export const store = createStore(reducer, initialState, composeWithDevTools(
	applyMiddleware(...mw)
))