import { useContext, useEffect } from 'react'
import {categories, menuItems} from '../utils/constants'
import LeftNavMenuItem from './LeftNavMenuItem'
import { Context } from '../context/contextAPI'
import { useNavigate } from 'react-router-dom'

const LeftNav = () => {
  const { selectCategories, setSelectCategories, mobileMenu,setMobileMenu } = useContext(Context);
  const navigate = useNavigate()
  const clickHandle = (name, type) => {
    switch (type) {
      case 'category':
        return setSelectCategories(name);
      case 'home':
        return selectCategories(name);
      case 'menu':
        return false;
      default:
        break;
    }
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenu(false);
      }
    };

    window.addEventListener('resize', handleResize);
  }, [setMobileMenu]);

  
  return (
    <div className={`leftNav md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 ${mobileMenu ? 'block py-0 h-[92%] ':'hidden'} transition-all`} >
      <div className="flex px-5 flex-col  ">
        {categories.map((item, i) => (
          <div key={i}>
            <LeftNavMenuItem text={item.type === 'home' ? 'Home' : item.name} icon={<item.icon />} action={() => { clickHandle(item.name, item.type); navigate('/')}}
              className={`${selectCategories === item.name ? "bg-white/[0.15]" : ''}`} />
          </div>
        ))}
        <hr className={` ${mobileMenu ? 'my-2' : 'my-3'} border-white/[0.2]`} />
        {menuItems.map((item, i) => (
          <LeftNavMenuItem key={i} text={item.name}icon={<item.icon />}  />
        ))}
        <div className=' flex mt-5 items-center justify-center text-[12px] text-gray-400'>&copy; 2024 Google LLC</div>
        
      </div>
    </div>
  )
}

export default LeftNav