import { useSelector } from 'react-redux';

import Home from './components/Home';
import Login from './components/Login';

function App() {
  const isLoggedIn = useSelector(state => state.LoginReducer.isLoggedIn);

  return (
    <div className="App">
      {
        isLoggedIn ? <Home/> : <Login/>
      }     
    </div>
  );
}

export default App;
