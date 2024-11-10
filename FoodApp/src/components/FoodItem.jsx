import PropTypes from 'prop-types'
import { assets } from '../assets/assets'
import { useContext} from 'react'
import { StoreContext } from '../context/StoreContext';

const FoodItem = ({ item }) => {
  const {cartItems,addToCart,removeFromCart} = useContext(StoreContext)
  return (
    <div className='flex flex-col rounded-[10px] gap-2 animate-fadeInOnce cursor-pointer shadow-xl hover:scale-105'>
      <div className='relative'>   
        <img className='rounded-t-[10px]' src={item.image} alt="food" />
        <div className='absolute bottom-2 right-5 bg-white p-1 rounded-xl'>
          {
        !cartItems[item.id] 
          ? <img className='w-5' onClick={()=>addToCart(item.id)} src={assets.add_icon} alt='add' />
          : <div className='flex gap-2 items-center'>
            <img className='w-5' onClick={()=>removeFromCart(item.id)} src={assets.remove_icon_red} alt="dec" />
            <p className='font-semibold text-red-500'>{cartItems[item.id]}</p>
            <img className='w-5' onClick={()=>addToCart(item.id)} src={assets.add_icon_green} alt="inc" />
          </div>
      }
          </div>
      </div>
      <div className='p-3 flex flex-col gap-2'>
        <div className='flex justify-between items-center'>
          <div>
          <h3 className=' font-semibold text-xl'>{item.name}</h3>
          <img className='w-[50px]' src={assets.ratings} alt="ratings" />
          </div>

        </div>
        
      <p className='text-[#747474] text-[14px] leading-tight'>{item.description}</p>
      <p className='font-semibold text-red-500 text-xl'>${item.price.toFixed(2)}</p>
      </div>
     
    </div>
  )
}

FoodItem.propTypes = {
  item:PropTypes.object.isRequired,
}
export default FoodItem