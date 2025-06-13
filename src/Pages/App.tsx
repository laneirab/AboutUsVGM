import React from 'react';
import {Header} from '../Pages/Header.tsx';
import {CreativeSection} from '../Pages/CreativeSection.tsx';
import {Benefits} from '../Pages/Benefits.tsx';
import { Services } from '../Pages/Services.tsx';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <CreativeSection />
      <Benefits />
      <Services />
    </div>
  );
};

export default App;
