// src/Pages/CreativeSection.tsx
import React from 'react';
import '../Styles/benefits.css';

export const Benefits: React.FC = () => {
  return (
    <section className="business-section">
      <div className="background-image">
        <div className="overlay">
          <h2 className="title">GOOD FOR YOU AND YOUR BUSINESS.</h2>
          <p className="subtitle">
            We are on a mission to help good businesses grow. This is why we reward sustainable businesses with lower fees, freeing up even more of your cash. Get started and access funding in 5 minutes.
          </p>
        </div>
      </div>
      <div className="benefits">
        <div className="benefit">UK-BASED SMALL TO MIDSIZE BUSINESSES</div>
        <div className="benefit">WHO NEED TO PAY TO SUPPLIERS AROUND THE WORLD</div>
        <div className="benefit">WHO CAN DEMONSTRATE SUSTAINABILITY EFFORTS</div>
      </div>
    </section>
  );
}; 