import './App.css';
import { Routes, Route } from 'react-router-dom'

import Register from './pages/Register';
import Landing from './pages/Landing';
import Otp from './pages/Otp';

import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <>

      <Routes>

        <Route path="/" element={<Landing />}></Route>
        <Route path="/auth" element={<Register />}></Route>
        <Route path="/verifyOtp" element={<Otp />}></Route>
      </Routes>

      <ToastContainer />
    </>

  );
}

export default App;
