import { useContext, useEffect } from 'react'
import LeftNavMenuItem from './LeftNavMenuItem'
import { Context } from '../context/contextAPI'
import { useNavigate } from 'react-router-dom'
import { categories, menuItems } from '../utils/constants'

const LeftNav = () => {
  const { selectCategories, setSelectCategories, mobileMenu,setMobileMenu } = useContext(Context);
  const navigate = useNavigate()
  const clickHandle = (id, name) => {
    setSelectCategories(id)
    if (name == 'Home') {
      navigate('/')
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
    <div className={`leftNav md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 ${mobileMenu ? 'block py-0 h-[91%] ':'hidden'} transition-all`} >
      <div className="flex px-5 flex-col  ">
        {categories.map((item) => (
          <LeftNavMenuItem key={item.id} item={item} isSelected={item.id == selectCategories} onclick={()=>clickHandle(item.id,item.name) } />
        ))}
        <hr className={` ${mobileMenu ? 'my-2' : 'my-3'} border-white/[0.2]`} />
        {menuItems.map((item) => (
          <LeftNavMenuItem key={item.name} item={item} isSelected={false} onclick={undefined}
          />
        ))}
        <div className=' flex mt-5 items-center justify-center text-[12px] text-gray-400'>&copy; 2024 Google LLC</div>
        
      </div>
    </div>
  )
}

export default LeftNav