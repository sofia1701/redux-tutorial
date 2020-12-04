import './App.css';
import updatePerson from './store/actions/personActions';
import updateGame from './store/actions/gameActions';
import fetchUser from './store/actions/userActions';
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
			<br />
			Users :{' '}
			<button className="btn-update" onClick={props.fetchUsers}>
				Fetch Users
			</button>
  {props.users.length === 0 ? <p>No users found</p> : props.users.map((user) => <p key={user.id}>{user.id} - {user.first_name} - {user.email}</p>)}
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		game: state.game,
		person: state.person,
		users: state.users,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateGame: () => dispatch(updateGame),
		updatePerson: () => dispatch(updatePerson),
		fetchUsers: () => dispatch(fetchUser),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
