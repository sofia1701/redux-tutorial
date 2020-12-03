import {createStore, combineReducers} from "redux";
import personReducer from "./reducers/personReducer";
import gameReducer from "./reducers/gameReducer";

//Combine reducers
const reducers = combineReducers({person:personReducer, game:gameReducer})

//Initial states
const initialStates = {
  game: {name: "Football"},
  person: {name: "Sofia"}
}

//Redux store
const store = createStore(reducers, initialStates);


export default store;