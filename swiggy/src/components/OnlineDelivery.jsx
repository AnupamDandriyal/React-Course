import { useEffect, useState } from "react";
import Card from "./Card";

const OnlineDelivery = () => {
  const [restaurant, setRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const getData = async () => {
    const response = await fetch("/data/restaurantChains.json");
    const data = await response.json();
    setRestaurant(data);
    setFilteredRestaurant(data); // Initially, show all restaurants
  };

  useEffect(() => {
    getData();
  }, []);

  const handleFilter = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredRestaurant(restaurant); // Show all restaurants
    } else {
      const filtered = restaurant.filter((item) =>
        item.name.includes(category)
      );
      setFilteredRestaurant(filtered);
    }
  };

  return (
    <div className="online">
      <div className="w-[85%] my-0 mx-auto mt-[30px] p-[10px]">
        <div className="flex justify-between w-full">
          <span className="font-bold text-[19px]">
            Restaurants with online food delivery in Haridwar
          </span>
        </div>
        <div id="btns" className="flex gap-[20px] mt-[25px] flex-wrap ">
          {["All", "Pizza", "Cake", "North Indian", "South Indian", "Dessert", "Sweets", "Ice Cream", "Biryani", "American"].map((category) => (
            <button
              key={category}
              className={`border border-slate-400 font-bold rounded-[15px] p-[8px] text-orange-400 ${
                selectedCategory === category ? "bg-orange-100" : ""
              }`}
              onClick={() => handleFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap md:flex mt-[20px] p-[10px] w-full gap-[15px] overflow-hidden md:w-full">
          {filteredRestaurant.map((item, i) => (
            <Card item={item} key={i} md={'w-full'} />
          ))}
        </div>
      </div>
      <div className="mt-[20px] border-b-2 border-gray-200" />
    </div>
  );
};

export default OnlineDelivery;
