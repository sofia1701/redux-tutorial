import './App.css';
import store from './store';
import updatePerson from './store/actions/personActions';
import updateGame from './store/actions/gameActions';

function App() {
	return (
		<div className="App">
			<h1>Redux Tutorial</h1>
			Person name: {store.getState().person.name}
			<button className="btn-update" onClick={() => store.dispatch(updatePerson)}>
				Update
			</button>
			<br />
			Sports name: {store.getState().game.name}
			<button className="btn-update" onClick={() => store.dispatch(updateGame)}>
				Update
			</button>
		</div>
	);
}

export default App;
