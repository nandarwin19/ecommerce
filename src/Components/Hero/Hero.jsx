import React from 'react'
import './Hero.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='hero'>
        <div class="container">
            <h3>Welcome To My Dresses Shop</h3>
            <h1>DRESSES FOR SUMMER</h1>
            <p>Save more with coupons & up to <span>70%</span> OFF!</p>
            <Link to='/'><button>Shop Now</button></Link>
        </div>
    </div>
  )
}

export default Hero