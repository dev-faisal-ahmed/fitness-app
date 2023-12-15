import React from 'react';
import { Navbar } from '../../components/navbar/navbar';

export const Hero = () => {
  return (
    <div
      className='hero h-screen bg-cover bg-no-repeat'
      style={{ backgroundImage: 'url(/assets/images/hero.jpg)' }}
    >
      <div className='h-full bg-black/90'>
        <Navbar />
      </div>
    </div>
  );
};
