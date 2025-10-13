import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './pages/Layout.jsx';
import { Home } from './pages/Home.jsx';
import { Login } from './pages/Login.jsx';
import { Travel } from './pages/Travel.jsx';
import { Support } from './pages/Support.jsx';
import { ProtectedPageRoute } from './pages/ProtectedPageRoute.js';

import './styles/bicycle.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/travel" element={<Travel/>}></Route>
          <Route path="/support" element={
            <ProtectedPageRoute>
              <Support/>
            </ProtectedPageRoute>
          }></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}