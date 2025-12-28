import React from 'react'
import { useState } from 'react'

const Counter = () => {
   
  const [num, setnum] = useState(0)
  let func=function(elm){
    setnum(num+elm)
  }

  return (
    <div className='bg-black h-screen overflow-hidden'>
      <div className='text-white bg-gray-700 w-80 h-50 mt-5 mx-5 grid place-content-center rounded-xl'>
        <p className='text-8xl'>{num}</p>
      </div>
      <div className='flex mx-4 mt-5'>
        <div onClick={()=>{
          func(1)}
          } className='bg-gray-500 text-white mx-4 px-9 py-2'>Increase</div>

        <div onClick={()=>{
          func(-1)
        }} className='bg-gray-500 text-white  mx-4 px-9 py-2'>Decrease</div>
      </div>

      <div onClick={function(){
        func(5)
      }} className='inline-block mx-20 mt-5 bg-gray-500 text-white  px-9 py-2'>
          Increase By 5
      </div>
    </div>
  )
}

export default Counter
