import { useState } from 'react';
import './App.css';
import Login from './authentication/Login';
import SignUp from './authentication/SignUp';
import NavBar from './layouts/NavBar';

function App() {
  const [user, setUser] = useState('')
  return (
    <>
      <SignUp />
    </>
  );
}

export default App;
