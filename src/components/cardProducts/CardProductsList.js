import React from 'react'
import CardProductsdesign from './CardProductsdesign'

function CardProductsList({list}) {
  return (
    <div className='card-div'  >
       {list.map((index,id) => (
        <div key={id}>
        <CardProductsdesign  products={index}/>
         </div>
        ))}
    </div>
  )
}

export default CardProductsList

