import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import mainReducer from "../reducers/MainReducer";

export const store = createStore(mainReducer, composeWithDevTools());
