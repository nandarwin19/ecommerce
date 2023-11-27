import React, { useContext } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
// import { ShopContext } from '../Context/ShopContext';
import { ShopContext } from '../Context/ShopContent';
// import Breadcrumb from '../Components/Breadcrumb/Breadcrumb'; // Correct the typo
import Breadcrum from '../Components/Breadcrum/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import './CSS/Product.css';
import Footer from '../Components/Footer/Footer';
import Copyright from '../Components/Copyright/Copyright';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div className='product-page'>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts/>
    </div>
  );
};

export default Product;
