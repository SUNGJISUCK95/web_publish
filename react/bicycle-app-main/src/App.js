import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './pages/Layout.jsx';
import { Home } from './pages/Home.jsx';
import { Purchase } from './pages/Purchase.jsx';
import { Rental } from './pages/Rental.jsx';
import { Travel } from './pages/Travel.jsx';
import { Support } from './pages/Support.jsx';
import { Login } from './pages/Login.jsx';
import ScrollToTop from "./components/ScrollToTop";

import './styles/commons.css';
import './styles/home.css';

export default function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="purchase" element={<Purchase />} />
          <Route path="rental" element={<Rental />} />
          <Route path="travel" element={<Travel />} />
          <Route path="support" element={<Support />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}