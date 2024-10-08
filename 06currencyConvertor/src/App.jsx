import { useState } from 'react'
import bgImage from '/img/pexels-jitu-mondal-3052645-4627668.jpg'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'
import { InputBox } from './Components/index.js'



function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)
  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }
  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
    style={{backgroundImage:`url(${bgImage})`}}>
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form onSubmit={(e) => {
            e.preventDefault()
            convert()
          }}>
            <div className='w-full mb-1'>
              <InputBox
                label="from"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={(amount) => setAmount(amount.toFixed(2))}
                selectedCurrency={from}
              />
            </div>
            <div className='relative w-full h-0.5'>
              <button
                className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white 
                rounded-md bg-blue-600 text-white px-2 pu-0.5'
                onClick={swap}>Swap</button>
            </div>
            <div className='w-full mb-1'>
              <InputBox
                label="To"
                amount={convertedAmount.toFixed(2)}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency.toFixed(2))}
                selectedCurrency={to}
                amountDisabled
              />
            </div>
            <button type='submit' className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
          </form>
        </div>
      </div>
   </div>
  )
}

export default App
