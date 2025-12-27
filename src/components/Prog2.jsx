import React from 'react'
import { useState } from 'react'

const Prog2 = () => {

  const [user, setuser] = useState("aman")
    const [roll, setnum] = useState(38)
    const [arr,setarr] = useState([10,20,30])
    

    let fn=function(){
      setuser("Abhishek")
      setnum(96)
      setarr([25,35,40])
    }

  return (
     <div className='bg-gray-900 h-screen overflow-hidden text-white'>
      <h2 className='px-10 py-2'>User name is  {user}</h2>
      <h2 className='px-10 py-2'> value of x is {roll} </h2>
      <h2 className='px-10 py-2'> {arr} </h2>
      <button onClick={fn} className='bg-blue-400 px-6 m-3'>click</button>
    </div>
  )
}

export default Prog2
