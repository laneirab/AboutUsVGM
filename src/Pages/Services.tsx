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
        scrub: 1.5,
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
          <div className="cont">
              <div className='cont1'>
    
                  <h1 style={{ margin: 0 }}>Servicios</h1>

                <div className='cont2'>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum turpis sed augue porttitor laoreet. Nunc a porta purus. Maecenas mollis tellus eu urna suscipit, sit amet pellentesque dolor venenatis. Fusce eu mattis nisl. Vestibulum ac porta tortor. Cras sollicitudin, augue vitae viverra laoreet, orci turpis consectetur turpis, ut dictum erat nisl eget urna. Duis dui mi, fringilla sed malesuada id, vulputate ac lorem. Maecenas ac tristique nulla. Nam et viverra ipsum. Vivamus euismod diam volutpat quam ultricies feugiat. Proin at ligula ut leo sodales mollis. Nulla viverra lacinia felis, non elementum dolor ultricies sed. Sed mattis, libero sit amet posuere cursus, est odio porta nulla, sed placerat ante erat a urna. Mauris lacinia luctus ex, a rutrum tortor congue vitae.
                  </p>
                  <p>
                    veamos más  →
                  </p>
                </div>
              </div>
            
          </div>
        </section>

        <section className="section section2">
          <div className="content">
            <div className='content2'>
              <div className='content3'>
              <h2 className='texto'>Taxes</h2>
              <img
                src="public/Fonts/Images/logos/taxes.svg"
                width="200"
                height="200"
                alt="equipo"
              />
              </div>
              <div className='content4'>
                <h1 className='t1'>Descripción</h1>
                <p  className="t2">
                Contamos con un equipo de profesionales altamente capacitados y comprometidos con brindar el mejor servicio a nuestros clientes. Nos especializamos en ofrecer soluciones personalizadas, asesoría integral y acompañamiento en cada etapa de tus proyectos. Nuestro objetivo es superar tus expectativas y ayudarte a alcanzar tus metas con confianza y seguridad.
                </p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.1rem' }}>
                  <hr style={{ margin: '1rem 0', color: '#F0EEE9', borderWidth: '2px' }} />
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8rem' }}>
                  <h3  className='t3'>subservicio</h3>
                  <p className='t4'>
                    Nuestro equipo cuenta con años de experiencia en el sector, brindando soluciones efectivas y personalizadas.
                  </p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8rem' }}>
                  <h3 className='t3'>subservicio</h3>
                  <p className='t4'>
                    Nos comprometemos a ofrecer un servicio de calidad, enfocado en las necesidades de cada cliente.
                  </p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8rem' }}>
                  <h3 className='t3'>subservicio</h3>
                  <p className='t4'>
                    Trabajamos para lograr los mejores resultados y la satisfacción total de quienes confían en nosotros.
                  </p>
                  </div>
                </div>
              </div>
            </div>
            
            

          </div>
        </section>

        <section className="section section3">
          <div className="content">
            <div className='content2'>
              <div className='content3'>
              <h2 className='texto1'>Consulting </h2>
              <img
                src="public/Fonts/Images/logos/consulting.svg"
                width="200"
                height="200"
                alt="equipo"
              />
              </div>
              <div className='content4'>
                <h1 className='t12'>Descripción</h1>
                <p  className="t22">
                Contamos con un equipo de profesionales altamente capacitados y comprometidos con brindar el mejor servicio a nuestros clientes. Nos especializamos en ofrecer soluciones personalizadas, asesoría integral y acompañamiento en cada etapa de tus proyectos. Nuestro objetivo es superar tus expectativas y ayudarte a alcanzar tus metas con confianza y seguridad.
                </p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.1rem' }}>
                  <hr style={{ margin: '1rem 0',  color: '#253A82', borderWidth: '2px' }} />
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8rem' }}>
                  <h3  className='t32'>subservicio</h3>
                  <p className='t42'>
                    Nuestro equipo cuenta con años de experiencia en el sector, brindando soluciones efectivas y personalizadas.
                  </p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8rem' }}>
                  <h3 className='t32'>subservicio</h3>
                  <p className='t42'>
                    Nos comprometemos a ofrecer un servicio de calidad, enfocado en las necesidades de cada cliente.
                  </p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8rem' }}>
                  <h3 className='t32'>subservicio</h3>
                  <p className='t42'>
                    Trabajamos para lograr los mejores resultados y la satisfacción total de quienes confían en nosotros.
                  </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section4">
          <div className="content">
            <div className='content2'>
              <div className='content3'>
              <h2 className='texto1'>Health Insurance</h2>
              <img
                src="public/Fonts/Images/logos/Health.svg"
                width="200"
                height="200"
                alt="equipo"
              />
              </div>
              <div className='content4'>
                <h1 className='t12'>Descripción</h1>
                <p  className="t22">
                Contamos con un equipo de profesionales altamente capacitados y comprometidos con brindar el mejor servicio a nuestros clientes. Nos especializamos en ofrecer soluciones personalizadas, asesoría integral y acompañamiento en cada etapa de tus proyectos. Nuestro objetivo es superar tus expectativas y ayudarte a alcanzar tus metas con confianza y seguridad.
                </p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.1rem' }}>
                  <hr style={{ margin: '1rem 0', color: '#253A82', borderWidth: '2px' }} />
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8rem' }}>
                  <h3  className='t32'>subservicio</h3>
                  <p className='t42'>
                    Nuestro equipo cuenta con años de experiencia en el sector, brindando soluciones efectivas y personalizadas.
                  </p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8rem' }}>
                  <h3 className='t32'>subservicio</h3>
                  <p className='t42'>
                    Nos comprometemos a ofrecer un servicio de calidad, enfocado en las necesidades de cada cliente.
                  </p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8rem' }}>
                  <h3 className='t32'>subservicio</h3>
                  <p className='t42'>
                    Trabajamos para lograr los mejores resultados y la satisfacción total de quienes confían en nosotros.
                  </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section5">
          <div className="content">
            <div className='content2'>
              <div className='content3'>
              <h2 className='texto1'>Real State</h2>
              <img
                src="public/Fonts/Images/logos/real.svg"
                width="200"
                height="200"
                alt="equipo"
              />
              </div>
              <div className='content4'>
                <h1 className='t12'>Descripción</h1>
                <p  className="t22">
                Contamos con un equipo de profesionales altamente capacitados y comprometidos con brindar el mejor servicio a nuestros clientes. Nos especializamos en ofrecer soluciones personalizadas, asesoría integral y acompañamiento en cada etapa de tus proyectos. Nuestro objetivo es superar tus expectativas y ayudarte a alcanzar tus metas con confianza y seguridad.
                </p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.1rem' }}>
                  <hr style={{ margin: '1rem 0',  color: '#253A82', borderWidth: '2px' }} />
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8rem' }}>
                  <h3  className='t32'>subservicio</h3>
                  <p className='t42'>
                    Nuestro equipo cuenta con años de experiencia en el sector, brindando soluciones efectivas y personalizadas.
                  </p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8rem' }}>
                  <h3 className='t32'>subservicio</h3>
                  <p className='t42'>
                    Nos comprometemos a ofrecer un servicio de calidad, enfocado en las necesidades de cada cliente.
                  </p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8rem' }}>
                  <h3 className='t32'>subservicio</h3>
                  <p className='t42'>
                    Trabajamos para lograr los mejores resultados y la satisfacción total de quienes confían en nosotros.
                  </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
