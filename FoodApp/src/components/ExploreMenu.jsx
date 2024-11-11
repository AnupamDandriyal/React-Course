import PropTypes from 'prop-types'
import { menu_list } from "../assets/assets"

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div id='menu' className="explore-menu max-w-full overflow-x-hidden mt-6 flex flex-col gap-[15px]">
      <h1 className="text-3xl font-semibold text-[#262626]">Explore our Menu</h1>
      <p className="max-w-[60%] text-[#808080]">Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
      
      <div className="explore-menu-list flex overflow-x-auto p-1 items-center">
        {
          menu_list.map((item, i) => (
            <div
              onClick={() => setCategory(prev => prev === item.menu_name ? 'All' : item.menu_name)}
              key={i}
              className={`flex flex-col items-center gap-3.5 cursor-pointer text-[#747474] hover:text-red-500 min-w-[180px]`}
            >
              <img
                id="menu-img"
                className={category === item.menu_name ? 'activemenu' : ''}
                src={item.menu_image}
                alt="menu-item"
              />
              <p className="font-semibold text-[max(1.1vw,16px)]">{item.menu_name}</p>
            </div>
          ))
        }
      </div>
      
      <hr className="mx-[10px] h-[3px] border-none bg-[#e2e2e2] mt-[-5px]" />
    </div>
  )
}

ExploreMenu.propTypes = {
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired
}

export default ExploreMenu
