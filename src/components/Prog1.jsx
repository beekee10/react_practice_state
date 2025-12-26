import React, { useState } from 'react'

const Prog1 = () => {
  
  
  const [num, setnum] = useState(10)

  return (
    <div className='bg-slate-800 h-screen overflow-hidden'>
      <h2 className='m-5 text-green-200 text-2xl'>value of x = {num} </h2>
      <button onClick={function(){
        setnum(50)
      }} className='bg-red-600 mx-5 px-8 py-2 rounded-full'>Click</button>
    </div>
  )
}

export default Prog1
