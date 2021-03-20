import logo from './logo.svg';
import './App.css';
import Table from "./containers/Table";
import CreateTodo from './containers/CreateTodo';

function App() {
  return (
    <div className="App">
      <CreateTodo />
      <Table />
    </div>
  );
}

export default App;
