import { createContext, useState } from 'react'
import { food_list } from '../assets/assets';

// eslint-disable-next-line react-refresh/only-export-components
export const StoreContext = createContext(null);
const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const addToCart = (id) => {
    if (!cartItems[id]) {
      setCartItems((prev) => ({ ...prev, [id]: 1 }));
    }
    else {
      setCartItems((prev)=>({...prev,[id]:prev[id]+1}))
    }
  }

  const removeFromCart = (id) => {
    setCartItems((prev)=>({...prev,[id]:prev[id]-1}))
  }

  const contextValue = {
    food_list,
    cartItems,setCartItems,addToCart,removeFromCart
  };

  
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider;