import React from 'react';
import Hero from '../Components/Hero/Hero';
import Offers from '../Components/Offers/Offers';
import NewCollections from '../Components/NewCollections/NewCollections';
import NewLetter from '../Components/NewLetter/NewLetter';
import BestSeller from '../Components/BestSeller/BestSeller';
import Testimonials from '../Components/Testimonials/Testimonials';

const Shop = () => {
  return (
    <div>
      <Hero/>
      <BestSeller/>
      <Offers/>
      <NewCollections/>
      <NewLetter/>
      <Testimonials/>
    </div>
  )
}

export default Shop