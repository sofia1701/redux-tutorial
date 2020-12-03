import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, combineReducers} from "redux";

//Redux Reducer - create state
const personReducer = (state = {}, {type, payload}) => {
  if(type === "UPDATE_NAME") {
    return {
      name: payload
    }
  }
  return state;
}

const gameReducer = (state = {}, {type, payload}) => {
  if(type ==="UPDATE_GAME") {
    return {
      name: payload
    }
  }
  return state;
}

//Combine reducers
const reducers = combineReducers({person:personReducer, game:gameReducer})

//Initial states
const initialStates = {
  game: {name: "Surf"},
  person: {name: "Sofia"}
}

//Redux store
const store = createStore(reducers, initialStates);
console.log(store.getState());

//Update state - dispatch action
store.dispatch({type: "UPDATE_NAME", payload: "Philip"})
console.log(store.getState());


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
