import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar';

function App() {
const url = 'http://jsonplaceholder.typicode.com/comments'
const [users, setUsers] = useState()
const fetchApi = async () => {
  const response = await fetch(url)
  const datos = await response.json();
  setUsers(datos)
}
useEffect(() => {
  fetchApi()
}, [])
  return (
    <div className="App">
    <Navbar />
    <div className="datos">
    { !users ? 'Cargando...' :
    users.map((user,index) => {
      return <h4 key={index}>{user.id}.{user.email}</h4>
      })
    }
    </div>
  </div>
  );
}

export default App;
