import React from 'react';
import RandomUserButton from '../app/components/RandomUserButton';
import Header from '../app/components/Header';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <RandomUserButton />
    </div>
  );
};

export default Home;
