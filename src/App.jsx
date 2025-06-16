import { useState } from 'react';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div>
      {showLogin ? <Login /> : <Register />}
      <button onClick={() => setShowLogin(!showLogin)}>
        Switch to {showLogin ? 'Register' : 'Login'}
      </button>
    </div>
  );
}

export default App;
