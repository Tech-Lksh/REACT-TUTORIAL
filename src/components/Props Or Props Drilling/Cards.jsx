import React from 'react'

const Cards = (props) => {
  return (
    <div className='mr-5 bg-white text-black inline-block p-5 text-center rounded shadow-lg'>
        <img className='ml-9 h-32 w-32 rounded-full mb-3' src={props.profilePhoto} alt="" />
        <h1 className='text-2xl font-semibold mb-4'>Name : {props.name}</h1>
        <h2 className='font-semibold'>Age : {props.age}, City : {props.city}</h2>
        <h2 className='font-semibold text-blue-400'>Profession : {props.profession}</h2>
        <button className='bg-slate-500 rounded-sm px-4 py-2 mt-5 font-semibold text-white hover:shadow-2xl'>Add Friend</button>
    </div>
  )
}

export default Cards