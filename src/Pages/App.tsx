import React from 'react';
import {Header} from '../Pages/Header.tsx';
import {CreativeSection} from '../Pages/CreativeSection.tsx';

const App: React.FC = () => {
  console.log('Header loaded');
  return (
    <div>
      <Header />
      <CreativeSection />
    </div>
  );
};

export default App;
