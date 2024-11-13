import { useContext } from "react"
import { StoreContext } from "../../context/StoreContext"



const PlaceOrder = () => {
  const {getTotalAmount} = useContext(StoreContext)
  return (
    <>
      <form className="order flex items-start justify-between gap-[50px] mt-[100px]">
        <div className="order-left w-full max-w-[max(30%,500px)] ">
          <p className="text-[30px] font-semibold mb-[50px]">Delivery Information</p>
          <div className="mutli-fields flex gap-[10px]">
            < input className="border border-[#c5c5c5] w-full p-[10px] outline-red-500 rounded-[4px] mb-[15px]" type="text" placeholder="First Name" />
            < input className="border border-[#c5c5c5] w-full p-[10px] outline-red-500 rounded-[4px] mb-[15px]" type="text" placeholder="Last Name"/>
          </div>
          < input className="border border-[#c5c5c5] w-full p-[10px] outline-red-500 rounded-[4px] mb-[15px]" type="email" placeholder="Email-Address" />
          < input className="border border-[#c5c5c5] w-full p-[10px] outline-red-500 rounded-[4px] mb-[15px]" type="text" placeholder="Street" />
          <div className="mutli-fields flex gap-[10px]">
            < input className="border border-[#c5c5c5] w-full p-[10px] outline-red-500 rounded-[4px] mb-[15px]" type="text" placeholder="City" />
            < input className="border border-[#c5c5c5] w-full p-[10px] outline-red-500 rounded-[4px] mb-[15px]" type="text" placeholder="State"/>
          </div>
          <div className="mutli-fields flex gap-[10px]">
            < input className="border border-[#c5c5c5] w-full p-[10px] outline-red-500 rounded-[4px] mb-[15px]" type="text" placeholder="PIN-Code" />
            < input className="border border-[#c5c5c5] w-full p-[10px] outline-red-500 rounded-[4px] mb-[15px]" type="text" placeholder="Country"/>
          </div>
          < input className="border border-[#c5c5c5] w-full p-[10px] outline-red-500 rounded-[4px] mb-[15px]" type="number" placeholder="Contact No." />
        </div>
        <div className="order-right w-full max-w-[max(40%,500px)]">
        <div className="cart-total flex-1 flex flex-col gap-[20px]">
          <h2 className="font-semibold text-[30px]">Cart Total</h2>
          <div>
            <div className="cart-total-details flex justify-between text-[#555]">
              <p>SubTotal</p>
              <p>{getTotalAmount().toFixed(2)}</p>
            </div>
            <hr className="my-[10px]" />
            <div className="cart-total-details flex justify-between text-[#555]">
              <p>Delivery Fee</p>
              <p>{getTotalAmount()===0?'0.00' : (5).toFixed(2)}</p>
            </div>
            <hr className="my-[10px]" />
            <div className="cart-total-details flex justify-between">
              <p>Total</p>
              <p>{getTotalAmount()===0 ? '0.00' : (getTotalAmount() + 5).toFixed(2)}</p>
            </div>
          </div>
          <button className="border mt-[30px] py-2 rounded w-[max(15vw,200px)]
          text-white bg-red-500">Proceed to Payment</button>
        </div>
        </div>

      </form>
    </>
  )
}

export default PlaceOrder