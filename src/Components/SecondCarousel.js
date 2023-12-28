import { useState } from "react";
import "./SecondCarousel.css"; 

const SecondCarousel = ({ items }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(items.length / 3);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="carousel-container mr-5">
      <div className="w-40">
        <p className="font-bold text-xl">BEST SELLERS</p>
      </div>
      <div className="carousel-bar">
        {[...Array(totalPages)].map((_, index) => (
          <div
            key={index}
            className={`bar-item ${index === currentPage ? "active" : ""}`}
            onClick={() => handlePageChange(index)}
          ></div>
        ))}
      </div>
        <hr className="w-32 bg-orange-500 font-bold pb-1" />

      <div className="carousel-content mt-4">
        {items
          .slice(currentPage * 3, currentPage * 3 + 3)
          .map((item, index) => (
            <div key={index} className="carousel-item flex">
              <div>
                <img className="h-28 w-40" src={item.image} alt="" />
              </div>
              <div className="ml-4">
                <p className="text-xl font-semibold">{item.name}</p>
                <div className="flex">
                  <p className="mr-4 text-xl text-orange-500 font-semibold">
                    {item.price}
                  </p>
                  <p className="text-sm mt-2  line-through text-gray-600">
                    {item.prevPrice}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SecondCarousel;
