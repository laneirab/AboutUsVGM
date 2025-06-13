import React from 'react';
import '../Styles/services.css';

export const Services: React.FC = () => {
  return (
    <main>
      <section className="section section1">
        <div className="content">
          <h2><strong>First</strong>, we set up the <em>snapping</em> points</h2>
        </div>
      </section>

      <section className="section section2">
        <div className="content">
          <h2><strong>Next</strong>, we set up the <em>scrolling</em> animation</h2>
        </div>
      </section>

      <section className="section section3">
        <div className="content">
          <h2><strong>Then</strong>, we position a <em>fixed</em> layout</h2>
        </div>
      </section>

      <section className="section section4">
        <div className="content">
          <h2><strong>Finally</strong>, we create the <em>transition</em> effects</h2>
        </div>
      </section>

      <section className="section section5">
        <div className="content">
          <h2><strong>Caveats</strong></h2>
        </div>
      </section>
    </main>
  );
};
