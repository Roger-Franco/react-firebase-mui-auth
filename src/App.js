import { useState } from 'react';
import './App.css';
import Login from './authentication/Login';
import SignUp from './authentication/SignUp';
import NavBar from './layouts/NavBar';

function App() {
  const [user, setUser] = useState('')
  const [toggleForm, setToggleForm] = useState(true)
  const formMode = () => {
    setToggleForm(!toggleForm)
  }
  return (
    <>
      {toggleForm ? (<Login toggle={() => formMode()} />) : (<SignUp toggle={() => formMode()} />)}
    </>
  );
}

export default App;
