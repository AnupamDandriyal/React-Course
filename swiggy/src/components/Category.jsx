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
    if (translateX != 1.5)   { 
    setTranslateX((prev) => prev + 0.5);
    }
  };

  const prevSlide = () => {
    if (translateX != 0) {
      setTranslateX((prev) => prev - 0.5);
    }
    
  };


  useEffect(() => {
    getData();
  }, []);


  return (
    <div className="category mt-[80px]">
      <div className="w-[85%] my-0 mx-auto mt-[30px] p-[10px]">
        <div className="flex justify-between w-full">
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
            className="flex w-max  transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(${-(translateX * 100)}%)` }}
          >
            {categories.map((category, i) => (
              <img
                key={i}
                src={category.image}
                alt="category"
                className="w-[200px] h-[200px] "
              />
            ))}
          </div>
        </div>
        <div className="mt-[10px] border-b-2 border-gray-200"/>
      </div>
    </div>
  );
};

export default Category;
