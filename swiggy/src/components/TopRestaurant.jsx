import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

import Card from "./Card";

const TopRestaurant = () => {
  const [restaurant, setRestaurant] = useState([]);
  const [translateX, setTranslateX] = useState(0);
  const getData = async () => {
    const response = await fetch("/data/restaurantChains.json");
    const data = await response.json();
    setRestaurant(data);
  };

  const nextSlide = () => {
    if (translateX != 0.8) {
      setTranslateX((prev) => prev + 0.4);
    }
  };

  const prevSlide = () => {
    if (translateX != 0) {
      setTranslateX((prev) => prev - 0.4);
    }
  };

  useEffect(() => {
    getData();
  }, []);


  return (
    <div className="category">
      <div className="w-[85%] my-0 mx-auto mt-[30px] p-[10px]">
        <div className="flex justify-between w-full">
          <span className="font-bold text-[19px]">
            Top Restaurant Chains in Haridwar
          </span>
          <div className="flex gap-[15px]">
            <button
              onClick={prevSlide}
              className="flex justify-center items-center bg-gray-200 h-[30px] w-[30px] cursor-pointer rounded-[100%] text-blue-950"
            >
              <FaArrowLeft />
            </button>

            <button
              onClick={nextSlide}
              className="flex justify-center items-center bg-gray-200 h-[30px] w-[30px] cursor-pointer rounded-[100%] text-blue-950"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="flex mt-[20px] w-full overflow-hidden">
          <div
            className="flex gap-[18px] w-max transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(${-(translateX * 100)}%)` }}
          >
            {restaurant.map((item, i) => (
              <Card item={item} key={i} />
            ))}
          </div>
        </div>
        <div className="mt-[20px] border-b-2 border-gray-200" />
      </div>
    </div>
  );
};

export default TopRestaurant;
