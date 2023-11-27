import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = (props) => {
  return (
    <div className='item'>
      <div className='item-container'>
        <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt='' /></Link>
        <p className='item-title'>{props.name}</p>
        <div className="item-prices">
            <div className="item-price-new">
                New Price: <span>${props.new_price}</span>
            </div>
            <div className="item-price-old">
                Old Price: <span>${props.old_price}</span>
            </div>
            
        </div>
        <Link to={`/product/${props.id}`}><button>Buy</button></Link>
      </div>
    </div>
  )
}

export default Item