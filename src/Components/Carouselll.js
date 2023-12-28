// src/components/Carousel.js
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import './Carousel.css'; // We'll create this file in a moment

const Carouselll = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const carouselData = [
    { id: 1, image: 'https://placekitten.com/400/300', title: 'Kitten 1' },
    { id: 2, image: 'https://placekitten.com/401/300', title: 'Kitten 2' },
    // Add more data as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {carouselData.map((item, index) => (
          <div
            key={item.id}
            className={`carousel-item relative ${hoveredIndex === index ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img src={item.image} alt={item.title} className="w-full h-auto" />
            {hoveredIndex === index && (
              <div className="buttons-container absolute bottom-4 left-1/2 
              transform -translate-x-1/2 bg-white bg-opacity-80 p-2 rounded shadow">
                <button className="favorite-btn bg-yellow-500 text-white px-4 py-2 
                rounded">
                  Favorite
                </button>
                <button className="cart-btn bg-green-500 text-white px-4 py-2 rounded">
                  Add to Cart
                </button>
              </div>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carouselll;
