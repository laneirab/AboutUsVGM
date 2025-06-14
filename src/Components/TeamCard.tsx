import React from 'react';
import '../Styles/teamCard.css';

interface TeamCardProps {
  role: string;
  name: string;
  description: string;
  image: string;
}

export const TeamCard: React.FC<TeamCardProps> = ({ role, name, description, image }) => (
  <div className="team-card">
    <div className="card-image">
      <img src={image} alt={name} />
    </div>
    <h3>{role}</h3>
    <p className="name">{name}</p>
    <p className="description">{description}</p>
  </div>
);

