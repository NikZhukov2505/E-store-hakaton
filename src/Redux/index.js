import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import storeReducer from "./reducers/store-reducer";



const rootReducer = combineReducers({
    loading: storeReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store