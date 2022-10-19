import { useState } from 'react';
import './App.css';
import Login from './authentication/Login';
import NavBar from './layouts/NavBar';

function App() {
  const [user, setUser] = useState('')
  return (
    <>
      <Login />
    </>
  );
}

export default App;
