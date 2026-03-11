import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Appointment from './pages/Appointment';
import Contact from './pages/Contact';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setPage={setCurrentPage} />;
      case 'services':
        return <Services setPage={setCurrentPage} />;
      case 'about':
        return <About />;
      case 'appointment':
        return <Appointment />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setPage={setCurrentPage} />;
    }
  };

  return (
    <div className="app">
      <Header currentPage={currentPage} setPage={setCurrentPage} />
      <main className="main-content">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
