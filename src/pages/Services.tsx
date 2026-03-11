import './Services.css';

interface ServicesProps {
  setPage: (page: string) => void;
}

const Services = ({ setPage }: ServicesProps) => {
  const serviceList = [
    {
      id: 'oil',
      title: 'Cambio de Aceite y Filtros',
      desc: 'Mantenimiento preventivo esencial para alargar la vida de su motor y garantizar un rendimiento óptimo. Utilizamos aceites sintéticos de la más alta calidad y filtros originales.',
      features: ['Aceite sintético 5W30/10W40', 'Sustitución de filtro de aceite', 'Revisión de niveles de líquidos', 'Inspección de 20 puntos de seguridad'],
      price: 'Desde 69€'
    },
    {
      id: 'brakes',
      title: 'Reparación de Frenos',
      desc: 'Su seguridad es lo primero. Diagnóstico y sustitución de pastillas, discos y líquido de frenos con componentes que cumplen o superan las especificaciones del fabricante.',
      features: ['Sustitución de pastillas', 'Cambio y purgado de líquido', 'Torneado/cambio de discos', 'Revisión de sistema ABS'],
      price: 'Desde 89€'
    },
    {
      id: 'engine',
      title: 'Diagnóstico de Motor',
      desc: 'Nuestros equipos de diagnosis avanzada se conectan a la centralita de su vehículo para leer códigos de falla y detectar problemas ocultos antes de que sean graves.',
      features: ['Lectura de códigos OBD-II', 'Análisis de gases de escape', 'Revisión de bujías y encendido', 'Inyección de combustible'],
      price: 'Desde 45€'
    },
    {
      id: 'tires',
      title: 'Reemplazo de Neumáticos',
      desc: 'Amplia gama de neumáticos de las mejores marcas para todo tipo de vehículos y presupuestos. Incluye montaje, equilibrado y válvula nueva.',
      features: ['Montaje y equilibrado', 'Alineación de dirección 3D', 'Reparación de pinchazos', 'Gama premium y económica'],
      price: 'Desde 55€/ud'
    }
  ];

  return (
    <div className="services-page fade-in">
      <div className="page-header text-center bg-dark">
        <div className="container">
          <h1>Nuestros Servicios</h1>
          <p className="subtitle text-white">Soluciones profesionales en mecánica integral para su tranquilidad</p>
        </div>
      </div>

      <div className="container section">
        <div className="services-list">
          {serviceList.map((service, index) => (
            <div key={service.id} className={`service-row ${index % 2 !== 0 ? 'reverse' : ''}`}>
              <div className="service-info">
                <h2>{service.title}</h2>
                <p className="service-desc">{service.desc}</p>
                <ul className="service-features">
                  {service.features.map((feature, i) => (
                    <li key={i}>
                      <span className="check-icon">✓</span> {feature}
                    </li>
                  ))}
                </ul>
                <div className="service-footer">
                  <span className="service-price">{service.price}</span>
                  <button className="btn btn-primary" onClick={() => setPage('appointment')}>
                    Pedir Cita
                  </button>
                </div>
              </div>
              <div className="service-image-placeholder">
                <div className="icon-large"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <section className="cta-banner text-center bg-dark text-white">
        <div className="container">
          <h2>¿No encuentras lo que buscas?</h2>
          <p>Realizamos todo tipo de reparaciones. Llámanos o visítanos y cuéntanos qué necesitas.</p>
          <button className="btn btn-outline mt-2" onClick={() => setPage('contact')}>
            Contactar
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;
