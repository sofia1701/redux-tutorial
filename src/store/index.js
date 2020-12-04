import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import personReducer from './reducers/personReducer';
import gameReducer from './reducers/gameReducer';
import userReducer from './reducers/userReducer';
import thunk from 'redux-thunk';

//Combine reducers
const reducers = combineReducers({ person: personReducer, game: gameReducer, users: userReducer });

//Initial states
const initialStates = {
	game: { name: 'Football' },
	person: { name: 'Sofia' , email: 'sofia@gmail.com'},
	users: [],
};

//Use redux thunk to use functional actions
const middleware = [thunk];

//Redux store
const store = createStore(
	reducers,
	initialStates,
	compose(
		applyMiddleware(...middleware),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

export default store;
