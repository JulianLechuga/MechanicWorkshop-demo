import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-col">
          <div className="footer-logo">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
            </svg>
            <h2>Taller<span>Madrid</span></h2>
          </div>
          <p className="footer-desc">
            Tu taller mecánico de confianza en Madrid. Especialistas en mantener tu vehículo en perfectas condiciones con un servicio transparente y profesional.
          </p>
        </div>

        <div className="footer-col">
          <h3>Enlaces Rápidos</h3>
          <ul>
            <li><a href="#home">Inicio</a></li>
            <li><a href="#services">Nuestros Servicios</a></li>
            <li><a href="#about">Sobre Nosotros</a></li>
            <li><a href="#appointment">Reservar Cita</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Contacto</h3>
          <ul>
            <li>
              <strong>Dirección:</strong> Calle del Motor 45, 28014 Madrid
            </li>
            <li>
              <strong>Teléfono:</strong> +34 912 345 678
            </li>
            <li>
              <strong>Email:</strong> info@tallermadrid.es
            </li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h3>Horario</h3>
          <ul>
            <li>Lunes - Viernes: 8:00 - 20:00</li>
            <li>Sábados: 9:00 - 14:00</li>
            <li>Domingos: Cerrado</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Taller Mecánico Madrid. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
