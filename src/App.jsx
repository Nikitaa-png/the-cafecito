import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageLoader from './components/PageLoader';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Visit from './pages/Visit';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <PageLoader />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/visit" element={<Visit />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
