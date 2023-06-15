
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Register />} />

          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />


        </Routes>
        <ToastContainer />
      </Router>
    </>
  )
}

export default App;
