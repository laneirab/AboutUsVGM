import React from 'react';
import '../Styles/serviceButton.css';

interface Props {
  icon: string;
  label: string;
  variant: 'taxes' | 'consulting' | 'health' | 'real';
}

export const ServiceButton: React.FC<Props> = ({ icon, label, variant }) => {
  return (
    <button className={`service-button ${variant}`}>
      <img src={icon} alt={label} className="icon" />
      {label}
    </button>
  );
};
