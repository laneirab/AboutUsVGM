import React from 'react';
import Button from 'react-bootstrap/Button';
import '../Styles/header.css'; 
import { BlurBackground } from '../Components/background';
import { NavBar } from '../Components/navBar';

export const Header: React.FC = () => {
  return (
    <div className="header-container">
      <BlurBackground />
      <NavBar />
      <div className='text'>
        <h3 className="Fin scale-up-center" style={{ fontSize: '3.5rem', lineHeight: '0.6' }}>EXPERT TAX AND</h3>
        <h2 className="Future scale-up-center" style={{ fontFamily: 'Beckman', fontSize: '6vw', lineHeight: '1' }}>INSURANCE</h2>
        <h2 className="Future scale-up-center" style={{ fontFamily: 'Beckman', fontSize: '6vw', lineHeight: '0.6' }}>SOLUTIONS</h2>
      </div>
      <p className="Fin scale-up-center" style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '1vw', fontWeight: '200', margin: '20px' }}>
        Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor incididunt ut <br />labore et dolore magna aliqua
      </p>
      <a href="https://wa.me/13052982118" target="_blank" rel="noopener noreferrer"> 
        <Button style={{ backgroundColor: '#29275C', borderColor: '#29275C', fontFamily: 'Beckman, sans-serif', fontSize: '15px', padding: '15px', margin:"5px", width:"200px", borderRadius:"30px"}} variant="primary" size="lg">
          Start Now
        </Button>
      </a>
    </div>
  );
};
