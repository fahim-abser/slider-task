import React from 'react';
import Carousel from './Components/Carousel';
import CarouselCard from './Components/CarouselCard/CarouselCard';

const App = () => {
  const carouselItems = [
    { id: 1,name:'HP Elite Computer', rating:'',  details:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto quo fugiat deleniti explicabo molestiae praesentium.', price:'$1.60', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTtcagNtPNaQMxeep_u6E6GdVnYHL0wT-Ptg' },
    { id: 2,name:'Panasonic in-ear stereo earphone', rating:'', discount:'4%', details:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto quo fugiat deleniti explicabo molestiae praesentium.', price:'$68.00', prevPrice:'$72.00', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7zc4r2szV7ryCKk0A1Xkln40Zf5H0BrLssw' },
    { id: 3,name:'The wonder and science', rating:'',  discount:'15%', details:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto quo fugiat deleniti explicabo molestiae praesentium.', price:'$50.00', prevPrice:'$59.00', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReYIDhtq8ZUOs5lGzMJhl3dIefxcYBNjxVcg' },
    { id: 4,name:'Nikon d-3300', rating:'',  discount:'6%', details:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto quo fugiat deleniti explicabo molestiae praesentium.', price:'$80.00', prevPrice:'$83.00', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYgzI3ABeUWaMYuYHmz3jTDhIdj62U8QG5yQ' },
    { id: 5,name:'Ricoh theta 360 spherical', rating:'',  discount:'2%', details:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto quo fugiat deleniti explicabo molestiae praesentium.', price:'$4.50', prevPrice:'$4.70', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPlO7liASsY56815CjAR7GPYeOMpoOw2HegA' },
    { id: 6,name:'Tascam closer back studio', rating:'', details:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto quo fugiat deleniti explicabo molestiae praesentium.', price:'$4.80', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZcjBQKlj7zwGVTv_g5zqWdr-8WB044XezDw' },
     
  ];

  return (
    <div>
      <Carousel items={carouselItems} />
      <CarouselCard></CarouselCard>
    </div>
  );
};

export default App;

