import React from 'react'

const Card = (props) => {
  return (
    <div className='border-2 border-black rounded-lg p-4 m-4 bg-white font-bold text-center h-20 w-80 flex flex-col justify-center items-center'>
        <h1>Hello,{props.username}</h1>
        <h1> {props.message}</h1>

    </div>
  )
}
export default Card
