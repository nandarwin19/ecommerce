import React from 'react';
import './RelatedProducts.css';
import data_product from '../assets/data';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';
import Item from '../item/Item';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const RelatedProducts = () => {
  return (

    <div className='related-products'>
    <div className='related-products-titles'>
        <div className='related-main-title'>
          <h1>YOU MAY ALSO LIKE</h1>
          <hr />
        </div>
        <Link to='/womens'><button>Check More</button></Link>
      </div>
      <Carousel responsive={responsive}>
        {data_product.map((item, i) => {
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
      </Carousel>
    </div>

  )
}

export default RelatedProducts