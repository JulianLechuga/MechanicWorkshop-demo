import './Header.css';

interface HeaderProps {
  currentPage: string;
  setPage: (page: string) => void;
}

const Header = ({ currentPage, setPage }: HeaderProps) => {
  const navItems = [
    { id: 'home', label: 'Inicio' },
    { id: 'services', label: 'Servicios' },
    { id: 'about', label: 'Nosotros' },
    { id: 'contact', label: 'Contacto' },
  ];

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo" onClick={() => setPage('home')}>
          <div className="logo-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
            </svg>
          </div>
          <h1>Taller<span>Madrid</span></h1>
        </div>

        <nav className="desktop-nav">
          <ul>
            {navItems.map(item => (
              <li key={item.id}>
                <button 
                  className={`nav-btn ${currentPage === item.id ? 'active' : ''}`}
                  onClick={() => setPage(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <button className="btn btn-primary" onClick={() => setPage('appointment')}>
            Solicitar Cita
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
