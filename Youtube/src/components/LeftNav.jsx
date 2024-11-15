import { useContext } from 'react'
import {categories} from '../utils/constants'
import LeftNavMenuItem from './LeftNavMenuItem'
import { Context } from '../context/contextAPI'
import { useNavigate } from 'react-router-dom'

const LeftNav = () => {
  const { selectCategories, setSelectCategories, mobileMenu } = useContext(Context);
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
  return (
    <div className=" md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all">
      <div className="flex px-5 flex-col  ">
        {categories.map((item, i) => (
          <div key={i}>
            <LeftNavMenuItem text={item.type === 'home' ? 'Home' : item.name} icon={<item.icon />} action={() => { clickHandle(item.name, item.type); navigate('/')}}
              className={`${selectCategories === item.name ? "bg-white/[0.15]" : ''}`} />
            {item.divider && (<hr className='my-5 border-white/[0.2]' />)}
          </div>
        ))}
        <hr className='my-3 border-white/[0.2]' />
        <div className=' flex items-center justify-center text-[12px] text-gray-400'>&copy; 2024 Google LLC</div>
        
      </div>
    </div>
  )
}

export default LeftNav