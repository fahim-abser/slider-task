import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faSync, faSearch } from "@fortawesome/free-solid-svg-icons";

const Carousel = ({ items }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const PrevArrow = (props) => (
    <div
      className={props.className}
      style={{
        ...props.style,
        // display: "block",
        background: "gray",
        position: "absolute",
        top: "50%",
        left: "5px",
        // transform: "translateY(-50%)",
        zIndex: 1,
        cursor: "pointer",
        padding: "1px",
      }}
      onClick={props.onClick}
    >
      Prev
    </div>
  );

  const NextArrow = (props) => (
    <div
      className={props.className}
      style={{
        ...props.style,
        display: "block",
        background: "gray",
        position: "absolute",
        top: "50%",
        right: "10px",
        transform: "translateY(-50%)",
        zIndex: 1,
        cursor: "pointer",
        padding: "1px",
      }}
      onClick={props.onClick}
    >
      Next
    </div>
  );

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    rows: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
        },
      },
    ],
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  const renderIcons = () => {
    return (
      <div className="icon-container bg-gray-300 black-25 absolute w-52 top-5 text-center  ml-5 z-10 ">
        <FontAwesomeIcon icon={faHeart} className="mr-2" />
        <FontAwesomeIcon icon={faSync} className="mr-2" />
        <FontAwesomeIcon icon={faSearch} className="icon" />
      </div>
    );
  };

  return (
    <div className="">
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={item.id}>
            <div
              className="flex ms-8"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {hoveredIndex === index && renderIcons()}
              <div className="relative">
                <img className="w-52 h-32 m-5 " src={item.image} alt="" />
              </div>
              <div className="m-5 w-72">
                <p>Rating</p>
                <p className="font-bold ">{item.name}</p>
                <div className="flex">
                  <p className="text-orange-500 pb-2 pt-2 font-bold text-xl">
                    {item.price}
                  </p>
                  <p className="text-sm mt-4 ms-3 line-through text-gray-600">
                    {item.prevPrice}
                  </p>
                </div>
                <p className="text-sm text-zinc-900">{item.details}</p>
                {hoveredIndex === index && (
                  <button className="border  bg-slate-500 text-white uppercase  rounded-full mt-5 px-4 py-1">
                    Add to cart
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
