import React from 'react';
import { Hero } from './hero';
import Featured from './../../components/featured/Featured';
import AboutUs from '../../components/about_us/AboutUs';

export const Home = () => {
  return (
    <>
      <Hero />
      <Featured />
      <AboutUs />
    </>
  );
};
