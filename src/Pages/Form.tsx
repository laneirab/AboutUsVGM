import React from 'react';
import '../Styles/formSection.css';
import { ServiceButton } from '../Components/serviceButton';

export const Form: React.FC = () => {
  return (
    <section className="contact-section">
      
      <div className="form-container">
        <h2><strong>TRABAJEMOS</strong> JUNTOS</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>

        <form>
          <label htmlFor="name">¿Cuál es tu nombre?</label>
          <input type="text" id="name" placeholder="Pablito Pérez Soto" />

          <label htmlFor="email">¿Cuál es tu correo?</label>
          <input type="email" id="email" placeholder="pablito@correo.com" />

          <label>Servicio</label>
          <div className="service-options">
            <ServiceButton icon="/Fonts/Images/logos/taxes.svg" label="Taxes" variant="taxes" />
            <ServiceButton icon="/Fonts/Images/logos/consulting.svg" label="Consulting" variant="consulting" />
            <ServiceButton icon="/Fonts/Images/logos/health.svg" label="Health" variant="health" />
            <ServiceButton icon="/Fonts/Images/logos/real.svg" label="Real" variant="real" />
          </div>

          <button type="submit" className="submit-button">ENVIAR</button>
        </form>

      </div>
      <img src="src\assets\vmgRecurso 10.svg" alt="Decoración de monedas" className="coins-bg" />

    </section>
  );
};
