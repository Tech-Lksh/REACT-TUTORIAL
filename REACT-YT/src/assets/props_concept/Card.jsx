import React from 'react'

const Card = (props) => {
  console.log(props);
  return (
    <div>
      <h2 className='text-white'>userName is {props.user} </h2>
    </div>
  )
}

export default Card
 