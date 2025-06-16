import React from 'react';
import Button from 'react-bootstrap/Button';
import '../Styles/header.css'; 
import { BlurBackground } from '../Components/background';

export const Header: React.FC = () => {
  return (
    <div className="header-container">
      <BlurBackground />
      <div className="header-content">
        <div className='text'>
          <h3 className="Fin scale-up-center">EXPERT TAX AND</h3>
          <h2 className="Future scale-up-center">INSURANCE</h2>
          <h2 className="Future scale-up-center" >SOLUTIONS</h2>
        </div>

        <p className="paragraph">
          Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor incididunt ut <br />labore et dolore magna aliqua
        </p>

        <a href="https://wa.me/13052982118" target="_blank" rel="noopener noreferrer"> 
          <Button style={{ backgroundColor: '#253A82', borderColor: '#253A82', fontFamily: 'Beckman, sans-serif', fontSize: '15px', padding: '20px', margin:"5px", width:"200px", borderRadius:"30px"}} variant="primary" size="lg">
            Start Now
          </Button>
        </a>
      </div>
    </div>
  );
};

