import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import mainReducer from "../reducers/MainReducer";
import {saveState} from "./BrowserStorage";

export const store = createStore(mainReducer, composeWithDevTools());

store.subscribe(() => {
    saveState('favorites', store.getState().favorites)
    saveState('watchLater', store.getState().watchLater)
})



