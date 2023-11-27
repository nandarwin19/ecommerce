import React, { useState } from 'react';
import './DescriptionBox.css';
import description_data from '../assets/description';

const DescriptionBox = () => {
  const [showDescription, setShowDescription] = useState(true);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className='descriptionBox'>
      <div className="descriptionbox-navigator">
        <div
          className={`description-nav-box ${showDescription ? '' : 'fade'}`}
          onClick={toggleDescription}
        >
          Description
        </div>
        <div
          className={`description-nav-box ${showDescription ? 'fade' : ''}`}
          onClick={toggleDescription}
        >
          Review (122)
        </div>
      </div>
      <div className="descriptionbox-description">
        {showDescription ? (
          <div>
            <p>
              Discover our latest collection of stylish and comfortable clothing. Immerse yourself in a world of fashion where quality meets affordability. From elegant evening wear to casual everyday attire, our clothing is designed to make you look and feel your best. Explore a wide range of colors, patterns, and styles that suit every occasion. Elevate your wardrobe with the latest trends and timeless classics. Find your perfect outfit today and step out with confidence!
            </p>
            <br />
            <p>
              Explore our diverse selection of clothing for all occasions. From trendy casual wear to elegant formal attire, our collection caters to every style. Discover a range of colors, patterns, and sizes, ensuring a perfect fit for everyone. Elevate your fashion game with our high-quality garments
            </p>
          </div>
        ) : (
          <div>

            <div>
            
              {description_data.map((des, index) => (
                <div key={index} className='description-review'>
                  <img src={des.image} title={des.id} />
                  <div className='des-review-text'>
                    <p>{des.time}</p>
                    <p>{des.description}</p>
                  </div>
                </div>
              ))}

              
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DescriptionBox;
