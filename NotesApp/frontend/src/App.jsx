import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login/Login.jsx'
import Register from './Components/Login/Register.jsx'
import { Route, Routes } from 'react-router-dom'


function App() {



  return (
    <>
      <h1>Noteapp</h1>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path ='/register' element={<Register />} />
      </Routes>
    </>
  )
}

export default App
