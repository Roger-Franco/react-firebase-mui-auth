import { useState } from 'react';
import './App.css';
import NavBar from './layouts/NavBar';

function App() {
  const [user, setUser] = useState('')
  return (
    <>
      <NavBar />
    </>
  );
}

export default App;
