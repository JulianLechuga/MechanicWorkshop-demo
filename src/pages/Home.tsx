import './Home.css';

interface HomeProps {
  setPage: (page: string) => void;
}

const Home = ({ setPage }: HomeProps) => {
  const services = [
    {
      id: 1,
      title: 'Cambio de Aceite',
      desc: 'Mantenimiento preventivo esencial para alargar la vida de su motor.',
      icon: 'Oil'
    },
    {
      id: 2,
      title: 'Reparación de Frenos',
      desc: 'Seguridad garantizada con recambios de primera calidad y revisión exhaustiva.',
      icon: 'Brake'
    },
    {
      id: 3,
      title: 'Diagnóstico de Motor',
      desc: 'Tecnología avanzada para identificar y solucionar cualquier avería.',
      icon: 'Engine'
    }
  ];

  return (
    <div className="home fade-in">
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <span className="hero-subtitle">MECÁNICA GENERAL EN MADRID</span>
          <h1 className="hero-title">
            Tu Vehículo en las<br/>
            Mejores Manos
          </h1>
          <p className="hero-desc">
            Ofrecemos servicios de mecánica integral con la más alta tecnología y profesionales cualificados. 
            Confía en nosotros para el cuidado de tu coche.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => setPage('appointment')}>
              Solicitar Presupuesto
            </button>
            <button className="btn btn-outline" onClick={() => setPage('services')}>
              Ver Servicios
            </button>
          </div>
        </div>
      </section>

      <section className="highlights section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Nuestros Servicios Destacados</h2>
            <p className="subtitle">Soluciones rápidas y efectivas para cualquier marca y modelo</p>
          </div>
          
          <div className="services-grid">
            {services.map(service => (
              <div key={service.id} className="service-card">
                <div className="service-icon-wrapper">
                  <div className="service-icon"></div>
                </div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <button className="btn-link" onClick={() => setPage('services')}>Saber más <span>&rarr;</span></button>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-3">
            <button className="btn btn-primary" onClick={() => setPage('services')}>
              Ver todos los servicios
            </button>
          </div>
        </div>
      </section>

      <section className="features section bg-dark text-white">
        <div className="container features-container">
          <div className="feature-item">
            <div className="feature-number">15+</div>
            <h4>Años de Experiencia</h4>
          </div>
          <div className="feature-item">
            <div className="feature-number">100%</div>
            <h4>Garantía en Piezas</h4>
          </div>
          <div className="feature-item">
            <div className="feature-number">5k+</div>
            <h4>Clientes Satisfechos</h4>
          </div>
        </div>
      </section>
      
      <section className="cta section flex-center">
        <div className="container text-center cta-content">
          <h2>¿Necesitas ayuda con tu coche?</h2>
          <p>Contacta con nosotros hoy mismo y pide tu cita. Estamos listos para ayudarte.</p>
          <button className="btn btn-primary btn-lg mt-2" onClick={() => setPage('contact')}>
            Contactar Ahora
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
