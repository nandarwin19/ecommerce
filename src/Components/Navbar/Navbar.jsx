import React, { useContext, useState } from 'react';
import './Navbar.css';
import cart_icon from '../assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContent';
// import Sidebar from '../Sidebar/Sidebar';
// import ToggleBtn from '../Sidebar/ToggleBtn/ToggleBtn';
import ToggleBtn from '../ToggleBtn/ToggleBtn';
// import ToggleBtn from '../Sidebar/ToggleBtn/ToggleBtn';


const Navbar = () => {

  const [menu, setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext);

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <p>KOOKAR</p>
        </div>
        <ul className="nav-menu">
            <li onClick={() => {setMenu("shops")}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>{menu === "shop"?<hr/>:<></>}</li>
            <li onClick={() => {setMenu("mens")}}><Link style={{textDecoration: 'none'}} to='/mens'>Men</Link>{menu === "mens"?<hr/>:<></>}</li>
            <li onClick={() => {setMenu("womens")}}><Link style={{textDecoration: 'none'}} to='/womens'>Women</Link>{menu === "womens"?<hr/>:<></>}</li>
            <li onClick={() => {setMenu("collections")}}><Link style={{textDecoration: 'none'}} to='/collections'>Kids</Link>{menu === "collections"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className='nav-cart-count'>{getTotalCartItems()}</div>
        </div>

        {/* For mobile */}
        <div className='nav-sidebar'>
          <Link to='/cart'><img src={cart_icon} alt="" className='mobile-cart-icon'/></Link>
          <div className='nav-cart-count'>{getTotalCartItems()}</div>
          <ToggleBtn />
        </div>
        
        
    </div>
  )
}

export default Navbar