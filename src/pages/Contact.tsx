import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page fade-in">
      <div className="page-header text-center bg-dark">
        <div className="container">
          <h1>Contacto y Ubicación</h1>
          <p className="subtitle text-white">Estamos siempre a su disposición para resolver cualquier duda</p>
        </div>
      </div>

      <div className="container section">
        <div className="contact-grid">
          <div className="contact-info">
            <h2>Cómo Encontrarnos</h2>
            <p className="mb-4">Visite nuestro taller o contáctenos por teléfono o correo electrónico. Responderemos lo antes posible.</p>
            
            <div className="contact-card">
              <div className="contact-icon">📍</div>
              <div className="contact-details">
                <h3>Dirección</h3>
                <p>Calle del Motor 45,<br/>28014 Madrid, España</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">📞</div>
              <div className="contact-details">
                <h3>Teléfono</h3>
                <p><a href="tel:+34912345678" className="contact-link">+34 912 345 678</a></p>
                <p className="contact-hours">Lun-Vie: 8:00 - 20:00</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">✉️</div>
              <div className="contact-details">
                <h3>Email</h3>
                <p><a href="mailto:info@tallermadrid.es" className="contact-link">info@tallermadrid.es</a></p>
              </div>
            </div>
            
            <div className="emergency-support mt-4 p-4 border rounded">
              <h4 className="text-secondary">Servicio de Grúa</h4>
              <p className="mb-0">¿Se ha quedado tirado? Contacte con nuestro servicio de grúa 24/7 de confianza: <strong>600 000 000</strong></p>
            </div>
          </div>
          
          <div className="contact-map">
            <div className="map-wrapper shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194348.13981242312!2d-3.819619176461946!3d40.437869760775535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2sMadrid!5e0!3m2!1sen!2ses!4v1684332304856!5m2!1sen!2ses"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de Madrid"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
