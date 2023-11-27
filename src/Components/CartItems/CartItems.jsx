import React, { useContext } from 'react';
import './CartItems.css';
import remove_icon from '../assets/cart_cross_icon.png';
// import { ShopContext } from '../Context/ShopContent';
import {ShopContext} from './../../Context/ShopContent'

const CartItems = () => {
  const {getTotalCartAmount, all_product, cartItems, removeFromCart} = useContext(ShopContext);
  return (
    <div className='cartitems'>
      <div className="cartitems-container">
        <div className="cartitems-main-title">
          <p>Products</p>
          <p className='main-title'>Title</p>
          <p className='main-price'>Price</p>
          <p className="main-quantity">Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
      <hr />
      {all_product.map((e)=> {
        if(cartItems[e.id] >0) {
          return <div>
            <div className='cartitems-format cartitems-format-main'>
              <img src={e.image} alt="" className='carticon-product-icon'/>
              <p className='carditem_name'>{e.name}</p>
              <p className='carditem_price'>${e.new_price}</p>
              <button className='cartitems-quantity'>{cartItems[e.id]}</button>
              <p className='total_price'>${e.new_price*cartItems[e.id]}</p>
              <img className='cartitems-remove-icon' src={remove_icon} onClick={()=> (removeFromCart(e.id))} alt="" />
            </div>
            <hr />
          </div>
        }
        return null; 
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtatal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Free</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Total</p>
              <h3>${getTotalCartAmount()}</h3>
            </div>
            
          </div>
          <button>CHECKOUT</button>
        </div>
        <div className='cartitems-promocode'>
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder='promo code' />
            <button>Submit</button>
          </div>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default CartItems