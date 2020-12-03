import './App.css';
import store from './store';

function App() {
  return (
    <div className="App">
      <h1>Redux Tutorial</h1>
      Person name: {store.getState().person.name}
      <br/>
      Sports name: {store.getState().game.name}
    </div>
  );
}

export default App;
