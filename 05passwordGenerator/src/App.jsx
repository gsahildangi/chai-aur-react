import {  useCallback, useEffect, useState ,useRef } from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowerd] = useState(false)
  const [password, setPassword] = useState("Generate Your Password")
  
  //useRef Hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) {
      str = str + "0123456789"
    }
    if (charAllowed) {
      str = str + "!@#$%^&*"
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, setNumberAllowed, setCharAllowerd, setPassword]) //here we have to provide a dependecny array ....which implies whenever any change happen in this set of array the passwordGenerator function will get optimize
 
  const copyPasswordToClipboard = useCallback(()=>{
    // passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,100);
     window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3
       my-8 text-orange-500 bg-gray-500'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
          type = "text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passwordRef}
          />
          <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>
        <div className='flex items-center gap-x-1'>
          <div className='flex items-center gap-x-1'>
            <input 
            type='range'
            min={8}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
             type='checkbox'
             defaultChecked={numberAllowed}
             id='numberInput'
             onChange={()=>{
                setNumberAllowed((prev)=>!prev);
             }}
            />
          <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
          <input
             type='checkbox'
             defaultChecked={numberAllowed}
             id='characterInput'
             onChange={()=>{
                setCharAllowerd(!charAllowed)
             }}
          />
          <label htmlFor="characterInput">Characters</label>
         </div>
        </div>
      </div>
    </>
  )
}

export default App
