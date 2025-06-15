import React from 'react';

export const ContactSection: React.FC = () => {
  return (
    <section className="contact-section">
      <footer className="contact-footer">
        <div className="contact-info">
          <p><strong>GET IN TOUCH</strong></p>
          <p>correovmg@gmail.com</p>
          <p>+573003879700</p>
        </div>
        <div className="footer-right">
          <p>2025 VGM LCC</p>
          <div className="socials">
            <i className="fab fa-instagram"></i>
            <i className="fab fa-facebook"></i>
          </div>
        </div>
        <p className="credit">Made by Laura & Santi</p>
      </footer>
    </section>
  );
};
