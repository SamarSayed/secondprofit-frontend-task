import { createStore,applyMiddleware } from "redux";
import reducer from "./reducer"
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducer ,composeWithDevTools(applyMiddleware(thunk)));

export default store;
