import { useContext } from "react"
import { StoreContext } from "../context/StoreContext"
import PropTypes from 'prop-types'
import FoodItem from "./FoodItem";


const FoodDisplay = ({category}) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="food-items-list mt-[30px] pb-10">
      <h2 className="text-[max(2vw,24px)] font-semibold mb-3">Top dishes near you</h2>
      <div className="food-list grid grid-cols-auto-fill-240 gap-[30px] gap-y-[50px]">
        {
          food_list.map((item, i) => {
            if(category==='All' || category===item.category){
              return <FoodItem key={i} item={item} />
            }
          }
          )
        }
      </div>

    </div>
  )
}

FoodDisplay.propTypes = {
  category:PropTypes.string.isRequired,
}

export default FoodDisplay