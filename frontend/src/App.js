import './App.css';
import { Routes, Route } from 'react-router-dom'

import Register from './pages/Register';
import Landing from './pages/Landing';
import Otp from './pages/Otp';
import ForgotPassword from './pages/ForgotPassword';
import ChangePassword from './pages/ChangePassword';
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <>

      <Routes>

        <Route path="/" element={<Landing />}></Route>
        <Route path="/auth" element={<Register />}></Route>
        <Route path="/verifyotp" element={<Otp />}></Route>
        <Route path="/auth/forgotpassword" element={<ForgotPassword />}></Route>
        <Route path="/auth/forgotpassword/:userId" element={<ChangePassword />}></Route>
      </Routes>

      <ToastContainer />
    </>

  );
}

export default App;
