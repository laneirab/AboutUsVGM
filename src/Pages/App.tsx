import React from 'react';
import { useEffect } from 'react';
import { Header } from '../Pages/Header.tsx';
import { CreativeSection } from '../Pages/CreativeSection.tsx';
import { Benefits } from '../Pages/Benefits.tsx';
import { Services } from '../Pages/Services.tsx';
import { Video } from '../Pages/Video.tsx';
import { Team } from '../Pages/Team.tsx';
import { Form } from '../Pages/Form.tsx';
import { Footer } from './footer.tsx';
import { gsap } from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { NavBar } from '../Components/navBar.tsx';

gsap.registerPlugin(ScrollSmoother);

const App: React.FC = () => {
  useEffect(() => {
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",   
      content: "#smooth-content",   
      smooth: 3,                 
      effects: false,
      smoothTouch: 0.5,
    });
  }, []);

  return (
    <>
      <NavBar />
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <section id="home">
          <Header />
        </section>

        <CreativeSection />
        <Benefits />

        <section id="services">
          <Services />
        </section>

        <section id="about">
          <Video />
        </section>
        <Team />

        <section id="contact">
          <Form />
        </section>
        
        <Footer />
      </div>
    </div>
    </>
  );
};

export default App;
