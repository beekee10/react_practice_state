import React from 'react'
import { useState } from 'react'

const Prog4 = () => {

  const [user, setuser] = useState({name:"Aman",age:23})
   
  const fnc=function(){
    let Newuser={...user}
    Newuser.name="Harsh"
    setuser(Newuser)
  }


  const [user2, setuser2] = useState({name:"Aman",age:24})

  const fnc2=function(){
    setuser2(prev=>({...prev,name:"Abhishek"}))
  }
  
  

  return (
    <div className='bg-gray-900 h-screen overflow-hidden text-white'>
      <div className='m-5'>
        <h1>{user.name} , {user.age}</h1>
        <button onClick={fnc} className='bg-green-500 mt-4 px-6 py-1 rounded-full'>Change user</button>
      </div>

    <div className='m-5'>
        <h1>{user2.name} , {user2.age}</h1>
        <button onClick={fnc2} className='bg-red-500 mt-4 px-6 py-1 rounded-full'>Change user (prev)</button>
      </div>


    </div>
  )
}

export default Prog4
