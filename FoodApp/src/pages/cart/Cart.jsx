import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const Cart = () => {
  const { food_list, cartItems, removeFromCart,getTotalAmount } = useContext(StoreContext);
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-title grid grid-cols-cart-grid items-center text-gray-500 text-[max(1vw,12px)]">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, i) => {
          if (cartItems[item.id] > 0) {
            return (
              <>
                <div
                  key={i}
                  className="cart-item my-[10px] text-black grid grid-cols-cart-grid items-center text-[max(1vw,12px)]"
                >
                  <img className="w-[50px]" src={item.image} alt="food-item" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p className="ml-6">{cartItems[item.id]}</p>
                  <p className="ml-3">${item.price * cartItems[item.id]}</p>
                  <p onClick={()=>removeFromCart(item.id)} className="font-semibold cursor-pointer ml-6 text-red-600">x</p>
                </div>
                <hr className=" h-[1px] w-full bg-[#e2e2e2]" />
              </>
            );
          }
        })}
      </div>
      <div className="cart-bottom mt-[80px] flex justify-between gap-[max(12vw,20px)]">
        <div className="cart-total flex-1 flex flex-col gap-[20px]">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details flex justify-between text-[#555]">
              <p>SubTotal</p>
              <p>{getTotalAmount().toFixed(2)}</p>
            </div>
            <hr className="my-[10px]" />
            <div className="cart-total-details flex justify-between text-[#555]">
              <p>Delivery Fee</p>
              <p>{(5).toFixed(2)}</p>
            </div>
            <hr className="my-[10px]" />
            <div className="cart-total-details flex justify-between">
              <p>Total</p>
              <p>{(getTotalAmount() + 5).toFixed(2)}</p>
            </div>
          </div>
          <button className="border py-2 rounded w-[max(15vw,200px)]
          text-white bg-red-500">Proceed to Checkout</button>
        </div>
        <div className="cart-promocode flex-1">
        <p className="text-[#555]">If you have a promocode enter it here</p>
          <div className="mt-[10px] flex justify-between items-center bg-[#eaeaea] rounded-[4px]">
          <input className="bg-transparent pl-[10px]" type="text" placeholder="promocode" />
          <button className="bg-black text-white w-[max(10vw,150px)] py-[12px] px-[5px] rounded-[4px] hover:text-red-500">Submit</button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Cart;
