import React from 'react';
import '../Styles/team.css';
import { TeamCard } from '../Components/TeamCard';

const teamData = [
    {
      role: 'UI DESIGNER',
      name: 'PAOLA JARA',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      image: 'https://i.redd.it/xxothi9tep671.jpg',
    },
    {
      role: 'DEVELOPER',
      name: 'JESSI URIBE',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      image: 'https://i.pinimg.com/736x/95/18/c7/9518c7baecedd451cc171af7ec775a51.jpg',
    },
    {
      role: 'MOBILE DESIGNER',
      name: 'SANDRITA PERDON',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      image: 'https://i.pinimg.com/236x/70/bb/5d/70bb5df119d6198fbd7855536a01251b.jpg',
    },
  ];
  
  export const Team: React.FC = () => {
    const infiniteTeamData = [...teamData, ...teamData, ...teamData];

    return (
      <section className="team-section">
        <h2>OUR TEAM</h2>
        <div className="team-carousel-container">
          <div className="team-carousel">
            {infiniteTeamData.map((member, index) => (
              <TeamCard key={`${member.name}-${index}`} {...member} />
            ))}
          </div>
        </div>
      </section>
    );
  };