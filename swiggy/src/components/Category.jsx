import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [translateX, setTranslateX] = useState(0);
  const getData = async () => {
    const response = await fetch("/data/category.json");
    const data = await response.json();
    setCategories(data);
  };

  const nextSlide = () => {
    if (categories.length -8 == translateX)   {
      return false;
    }
    setTranslateX((prev) => prev +0.5);
  };

  const prevSlide = () => {
    if (translateX === 0) {
      return false;
    }
    setTranslateX((prev) => prev - 0.5);
  };



  useEffect(() => {
    getData();
  }, []);

  console.log(categories);

  return (
    <div className="category">
      <div className="w-[85%] my-0 mx-auto mt-[30px] p-[10px]">
        <div className="flex mb-[15px] justify-between w-full">
          <span className="font-bold text-[19px]">Whats on your mind?</span>
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
        <div className="flex w-full overflow-hidden">
          <div
            className="flex w-max transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(${-(translateX * 100)}%)` }}
          >
            {categories.map((category, i) => (
              <img
                key={i}
                src={category.image}
                alt="category"
                className="w-[200px] h-[200px] rounded-full"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
