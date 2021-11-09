import logo from './logo.svg';
import './App.css';
import {useSelector,useDispatch} from 'react-redux'
import {decrement, increment} from './Actions'

function App() {
  const counter = useSelector(state=>state.counter)
  const isLogged = useSelector(state=>state.logged)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
      {isLogged ? <h3>hey,you ae loggedin</h3> :<h3>notLogged</h3>}
    </div>
  );
}

export default App;
