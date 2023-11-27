import React from 'react'
import './Offers.css';
import { Link } from 'react-router-dom';

const Offers = () => {
  return (
    <div className='offers'>
        <div className='offers-container'>
          <div className='offers-line'>
            <hr />
            <p>✧</p>
            <hr/>
          </div>
          
          <div className='offers-css'>
            <div className="offers-left">
            </div>
            <div className="offers-right">
                <h3>Check Out BEST-SELLERS ITEMS Collection</h3>
                <p>Beautiful & cool dresses for Women</p>
                <Link to='/womens'><button>Check Now</button></Link>
            </div>
          </div>
          <div className='offers-line'>
            <hr />
            <p>✧</p>
            <hr/>
          </div>
            
        </div>
        
    </div>
  )
}

export default Offers