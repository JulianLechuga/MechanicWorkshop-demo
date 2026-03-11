import './About.css';

const About = () => {
  return (
    <div className="about-page fade-in">
      <div className="page-header text-center bg-dark">
        <div className="container">
          <h1>Sobre Nuestra Historia</h1>
          <p className="subtitle text-white">Experiencia, confianza y tecnología al servicio de su vehículo</p>
        </div>
      </div>

      <div className="container section about-content">
        <div className="about-grid">
          <div className="about-text">
            <h2>Más de 15 Años de Experiencia</h2>
            <p>
              En <strong>Taller Madrid</strong> somos unos apasionados del motor. Desde nuestra fundación, no hemos dejado de evolucionar, invirtiendo en la mejor tecnología de diagnóstico y formación continua para nuestro equipo de mecánicos profesionales.
            </p>
            <p>
              Entendemos que dejar su coche en un taller requiere confianza. Por eso, basamos nuestro trabajo en la <strong>transparencia absoluta</strong>. Antes de cualquier reparación, le explicamos el problema, le mostramos las piezas y le proporcionamos un presupuesto cerrado y claro.
            </p>
            
            <div className="core-values">
              <div className="value-item">
                <div className="value-icon bg-primary">✓</div>
                <div>
                  <h4>Honestidad</h4>
                  <p>Reparamos solo lo que necesita ser reparado, sin sorpresas en la factura final.</p>
                </div>
              </div>
              <div className="value-item">
                <div className="value-icon bg-secondary">★</div>
                <div>
                  <h4>Calidad Premium</h4>
                  <p>Utilizamos solo repuestos originales o de primera calidad para garantizar la vida útil del vehículo.</p>
                </div>
              </div>
              <div className="value-item">
                <div className="value-icon bg-gray">⚡</div>
                <div>
                  <h4>Rapidez</h4>
                  <p>Optimizamos nuestros tiempos para que usted vuelva a la carretera lo antes posible.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-images">
            <div className="about-image-main">
              <div className="image-placeholder">Taller Moderno</div>
            </div>
            <div className="about-image-secondary">
              <div className="image-placeholder">Equipo Profesional</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
