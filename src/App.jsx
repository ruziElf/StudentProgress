import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './Home';

function App() {
  return (
  
  <>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>}></Route>
  </Routes>
  </>

  );


}

export default App
