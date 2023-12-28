import image1 from "../images/panasonic.png";
import image2 from "../images/lightweight.png";
import image3 from "../images/nasa retro.png";
import image4 from "../images/HD tab.png";
import image5 from "../images/midnight sky.png";
import image6 from "../images/tv.png";
import image7 from "../images/wonder and science.png";
import image8 from "../images/makeup pouch.png";
import image9 from "../images/HP elite.png";
import SecondCarousel from "../SecondCarousel";

const CarouselCard = () => {
  const items = [
    {
      image: image1,
      name: "Panasonic In-Eat Stereo",
      price: "$68.00",
      prevPrice: "$72.00",
    },
    {
      image: image2,
      name: "Lightweight On Ear Headphone",
      price: "$2.20",
    },
    {
      image: image3,
      name: "Nasa Retro Logo",
      price: "$57.00",
    },
    {
      image: image4,
      name: "HD Tablet with Alexa",
      price: "$50.0",
      prevPrice: "$59.00",
    },
    {
      image: image5,
      name: "Midnight Sky Ocean Sounds",
      price: "$260.00",
    },
    {
      image: image6,
      name: "TiVi Bridge MoCa 2.0",
      price: "$34.00",
    },
    {
      image: image7,
      name: "The Wonder and Science",
      price: "$50.00",
      prevPrice: "$59.00",
    },
    {
      image: image8,
      name: "Makeup Pouch Travel Hanging",
      price: "$3.90",
    },
    {
      image: image9,
      name: "HP Elite Computer C2D",
      price: "$1.60",
    },
  ];

  return (
    <div>
      <SecondCarousel items={items} />
    </div>
  );
};

export default CarouselCard;
