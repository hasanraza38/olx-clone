import React from 'react'

const Cards = (props) => {
  return (
    <>

<div className="card bg-gray-800 w-[30vw] h-[90vh] overflow-hidden shadow-md shadow-white">
  <figure>
    <img className='w-[30vw] h-[50vh]' src={props.img}/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">{props.title}</h2>
    <p>{props.description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">{props.btn}</button>
    </div>
  </div>
</div>

    </>
  )
}

export default Cards