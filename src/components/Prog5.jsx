import React from 'react'
import { useState } from 'react'

const Prog5 = () => {

  const [arr, setarr] = useState([10,20,30])
  
  let clickFnc=function(){
    setarr(prev=>([...arr,arr[4]=99,arr[5]=100]))
  }


  const [nums, setnums] = useState(10)

  const click2=function(){
    setnums(prev => (prev+1) )
    setnums(prev => (prev+1) )
    setnums(prev => (prev+1) )

  }
  
  return (
    <div className='bg-gray-900 h-screen overflow-hidden text-white'>
      <div className='m-5'>
        <h1>{arr} </h1>
        <button onClick={clickFnc} className='bg-green-500 mt-4 px-6 py-1 rounded-full'>Change user</button>
      </div>

      <div className='m-5 mt-25'>
        <h1 className='mx-15'>{nums}</h1>
        <button onClick={click2} className='bg-red-500 mt-4 px-6 py-1 rounded-full'>increment by 3 (prev)</button>
      </div>
    </div>
  )
}

export default Prog5
