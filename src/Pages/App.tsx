import React from 'react';
import {Header} from '../Pages/Header.tsx';
import {CreativeSection} from '../Pages/CreativeSection.tsx';
import {Benefits} from '../Pages/Benefits.tsx';
import { Services } from '../Pages/Services.tsx';
import { Video } from '../Pages/Video.tsx';
import {Team} from '../Pages/Team.tsx';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <CreativeSection />
      <Benefits />
      <Services />
      <Video />
      <Team />
    </div>
  );
};

export default App;
