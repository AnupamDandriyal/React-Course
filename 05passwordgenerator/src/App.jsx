import { useState,useCallback,useEffect,useRef} from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [characterAllowed, setcharacterAllowed] = useState(false);
  const [Password, setPassword] = useState('');

  const passwordRef = useRef(null)

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(Password);
    passwordRef.current?.select();
  }

  const generatePassword = useCallback(() => {
    let pass = '';
    let passwordString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numberAllowed) passwordString += '0123456789';
    if (characterAllowed) passwordString += '!@#$%&*+<>/~?';
    for (let i = 1; i < length; i++) {
      const rno = Math.floor(Math.random() * passwordString.length + 1);
      pass += passwordString.charAt(rno);
    }
    setPassword(pass)
  }, [length, numberAllowed, characterAllowed]);


  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, characterAllowed]);


  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center my-3 text-1.5xl'>PassWord Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" value={Password} className='outline-none w-full py-1 px-3' placeholder='password' readOnly ref={passwordRef} />
        <button
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
      </div>
      <div className='flex items-center gap-x-1'>
        <input
          type="range"
          min={8} max={20}
          value={length}
          className='cursor-pointer'
          onChange={(e) => setLength(e.target.value)}
          name=''
          id=''
        />
        <label htmlFor="length">Length: {length}</label>

        <input type="checkbox"
          defaultChecked={numberAllowed}
          onChange={()=> setnumberAllowed((prev)=>!prev)}
        />
        <label htmlFor="character">Numbers</label>
        
        <input type="checkbox"
          defaultChecked={characterAllowed}
          onChange={()=> setcharacterAllowed((prev)=>!prev)}
        />
        <label htmlFor="number">Characters</label>
      </div>
    </div>
  )
}

export default App
