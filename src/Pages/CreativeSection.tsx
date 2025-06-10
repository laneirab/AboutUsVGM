// src/Pages/CreativeSection.tsx
import React from 'react';
import '../Styles/CreativeSection.css';

export const CreativeSection: React.FC = () => {
  return (
    <section className="creative-section">
      <h2 className="title">TITULO CREATIVO</h2>
      <div className="circle-layout">
        <div className="text-block top-left">
          <h4>LOREM IPSUM DOLOR SIT AMET</h4>
          <p>Suspendisse molestie fringilla risus, nec feugiat lacus luctus et. Aliquam ac auctor nibh. Nulla facilisi.</p>
        </div>
        <div className="text-block top-right">
          <h4>ALIQUAM SOLLICITUDIN EN NISL ET LACINIA</h4>
          <p>Suspendisse molestie fringilla risus, nec feugiat lacus luctus et. Aliquam ac auctor nibh. Nulla facilisi.</p>
        </div>
        <div className="center-icon">
          <img src="src\assets\logos\logoBlancoSinTexto.svg" alt="Icono central" />
        </div>
        <div className="text-block bottom-left">
          <h4>VIVAMUS TINCIDUNT MOLLIS NIBH</h4>
          <p>Suspendisse molestie fringilla risus, nec feugiat lacus luctus et. Aliquam ac auctor nibh. Nulla facilisi.</p>
        </div>
        <div className="text-block bottom-right">
          <h4>NULLAM EUISMOD LECTUS MASSA</h4>
          <p>Suspendisse molestie fringilla risus, nec feugiat lacus luctus et. Aliquam ac auctor nibh. Nulla facilisi.</p>
        </div>
      </div>
      <button className="creative-button">OTRA COSA</button>
    </section>
  );
};

