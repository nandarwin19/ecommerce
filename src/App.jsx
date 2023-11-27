import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import men_banner from './Components/assets/men_banner.jpg';
import women_banner from './Components/assets/women_banner.jpg';
import kid_banner from './Components/assets/kid_banner.png'
import Cursor from './Components/cursor/Cursor';
import Footer from './Components/Footer/Footer';
import Copyright from './Components/Copyright/Copyright';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Cursor />
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop/>} />
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>} />
          <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>} />
          <Route path='/collections' element={<ShopCategory banner={kid_banner} category="kid"/>} />
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>} />
          <Route path='/login' element={<LoginSignup/>}/>
        </Routes>
        <Footer/>
        <Copyright/>
      </BrowserRouter>
    </div>
  )
}

export default App