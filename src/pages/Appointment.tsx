import { useState } from 'react';
import './Appointment.css';

const Appointment = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Real implementation would send to backend
  };

  if (submitted) {
    return (
      <div className="appointment-page fade-in">
        <div className="container section flex-center text-center confirmation-message">
          <div className="success-icon">✓</div>
          <h2>¡Solicitud Recibida!</h2>
          <p>Hemos recibido su petición correctamente. Uno de nuestros asesores se pondrá en contacto con usted en breve para confirmar la cita.</p>
          <button className="btn btn-primary mt-2" onClick={() => setSubmitted(false)}>
            Nueva Solicitud
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="appointment-page fade-in">
      <div className="page-header text-center bg-dark">
        <div className="container">
          <h1>Solicitar Cita</h1>
          <p className="subtitle text-white">Rellene el formulario y le confirmaremos su reserva lo antes posible</p>
        </div>
      </div>

      <div className="container section form-section">
        <div className="form-wrapper shadow-lg">
          <form onSubmit={handleSubmit} className="appointment-form">
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="name">Nombre y Apellidos</label>
                <input type="text" id="name" required placeholder="Ej: Juan Pérez" />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Teléfono de Contacto</label>
                <input type="tel" id="phone" required placeholder="Ej: 600 123 456" />
              </div>

              <div className="form-group">
                <label htmlFor="email">Correo Electrónico</label>
                <input type="email" id="email" required placeholder="ejemplo@correo.com" />
              </div>

              <div className="form-group">
                <label htmlFor="service">Servicio Principal</label>
                <select id="service" required defaultValue="">
                  <option value="" disabled>Seleccione un servicio...</option>
                  <option value="oil">Cambio de Aceite</option>
                  <option value="brakes">Frenos</option>
                  <option value="engine">Diagnóstico Motor</option>
                  <option value="tires">Neumáticos</option>
                  <option value="other">Otro / Revisión General</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="date">Fecha Preferida</label>
                <input type="date" id="date" required />
              </div>

              <div className="form-group">
                <label htmlFor="vehicle">Vehículo (Marca y Modelo)</label>
                <input type="text" id="vehicle" placeholder="Ej: SEAT León" />
              </div>
            </div>

            <div className="form-group full-width mt-2">
              <label htmlFor="notes">Comentarios o Síntomas Adicionales</label>
              <textarea id="notes" rows={4} placeholder="Describa brevemente qué necesita o qué comportamiento extraño ha notado en su vehículo..."></textarea>
            </div>

            <div className="form-footer mt-3">
              <button type="submit" className="btn btn-primary btn-lg w-100">
                Enviar Solicitud
              </button>
              <p className="privacy-note">
                Al enviar este formulario acepta nuestra política de privacidad. Sus datos serán utilizados únicamente para gestionar su cita.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
