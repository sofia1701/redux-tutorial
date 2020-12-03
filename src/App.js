import './App.css';
import updatePerson from './store/actions/personActions';
import updateGame from './store/actions/gameActions';
import { connect } from 'react-redux';

function App(props) {
	return (
		<div className="App">
			<h1>Redux Tutorial</h1>
			Person name: {props.person.name}
			<button className="btn-update" onClick={props.updatePerson}>
				Update
			</button>
			<br />
			Sports name: {props.game.name}
			<button className="btn-update" onClick={props.updateGame}>
				Update
			</button>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		game: state.game,
		person: state.person,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateGame: () => dispatch(updateGame),
		updatePerson: () => dispatch(updatePerson),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
