import {createStore} from "redux"
import combineReducers from "../Reducers"

// ToDo research configureStore when time permits and refactor this
const store = createStore(
  combineReducers, 
)

export default store;