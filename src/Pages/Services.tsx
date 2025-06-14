import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../Styles/services.css';

gsap.registerPlugin(ScrollTrigger);

export const Services: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const sections = gsap.utils.toArray<HTMLElement>('.section');

    
    const totalScrollWidth = container.scrollWidth - window.innerWidth;

    
    gsap.to(container, {
      x: () => `-${totalScrollWidth}`,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: () => `+=${totalScrollWidth}`,
        pin: true,
        anticipatePin: 1,
        scrub: 3,
        snap : 0.05
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section className="horizontal-section">
      <div className="horizontal-container" ref={containerRef}>
        <section className="section section1">
          <div className="content">
            <h2 className="texto1">¿Sabe que Caravana?</h2>
          </div>
        </section>

        <section className="section section2">
          <div className="content">
            <img
        src="public\Fonts\Images\logos\taxes.svg"
        width="200"
        height="200"
        alt="vgm"
        />
            <h2 className="texto">Si no le gusta el motilado Pailaaa</h2>

          </div>
        </section>

        <section className="section section3">
          <div className="content">
            <img
        src="public\Fonts\Images\logos\consulting.svg"
        width="200"
        height="200"
        alt="vgm"
        />
            <h2 className="texto1">No lo mire , yo me siento bien asi</h2>
          </div>
        </section>

        <section className="section section4">
          <div className="content">
            <img
        src="public\Fonts\Images\logos\health.svg"
        width="200"
        height="200"
        alt="vgm"
        />
            <h2 className="texto1">Yo no me mantengo pendiente del que diran</h2>
          </div>
        </section>

        <section className="section section5">
          <div className="content">
            <img
        src="public\Fonts\Images\logos\real.svg"
        width="200"
        height="200"
        alt="vgm"
        />
            <h2 className="texto1"><strong>Desde que yo este bien , que ruede el mundo a mi alrededor ¿listo?</strong></h2>
          </div>
        </section>
      </div>
    </section>
  );
};
