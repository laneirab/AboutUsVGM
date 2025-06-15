import React from 'react';
import '../Styles/footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="contact-footer">
      <div className="footer-row">
        <div className="footer-left">
          <img src="src/assets/vmgRecurso 8.svg" alt="Logo VMG" className="footer-logo" />
          <div className="footer-contact">
            <h3>GET IN TOUCH</h3>
            <p>correovmg@gmail.com</p>
            <p>+57 3003879700</p>
          </div>
        </div>

        <div className="footer-top-right">
          <p className="footer-company">2025 VGM LCC</p>
          <div className="social-icons">
            <img src="public/Fonts/Images/logos/logoInstagram.svg" alt="Instagram" />
            <img src="public/Fonts/Images/logos/logoFacebook.svg" alt="Facebook" />
          </div>
        </div>
      </div>
      <hr />
      <p className="footer-note">
          VMG LCC terms that are outside of VMG’s direct influence, for the sake of maintaining user understanding, are sometimes required. As others 2025.
        </p>
      <div className="footer-bottom">
        <p className="footer-terms">
          © Copyright VMG Corporation LCC 2025
        </p>
        <p className="footer-made">
          Made by Laura&Santi
        </p>
      </div>
    </footer>
  );
};
