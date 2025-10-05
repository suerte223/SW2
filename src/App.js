import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './home';
import Signin from './signin';
import Signup from './signup';

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
