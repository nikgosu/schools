import {applyMiddleware, legacy_createStore as createStore} from 'redux'
import {initialState, reducer} from "./reducers"
import {composeWithDevTools} from "redux-devtools-extension"

export const store = createStore(reducer, initialState, composeWithDevTools(
	applyMiddleware()
))