import { BiSolidQuoteLeft } from "react-icons/bi";
import { testimonials } from "./data/dummydata";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonials = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="testimonials">
      <div className="container">
      <h1>Testimonials</h1>
      <Slider {...settings}>
        {testimonials.map((val, i) => (
          <div className="box" key={i}>
            <i>
              <BiSolidQuoteLeft />
            </i>
            <p>{val.text}</p>
            <div className="img">
            <img src={val.image} alt="user" />
            </div>
           
            <h3>{val.name}</h3>
            <span>{val.post}</span>
          </div>
        ))}
          </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
