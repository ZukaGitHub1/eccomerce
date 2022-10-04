import React from 'react'
import SingleProductsDesign from './SingleProductsDesign'

function SingleProductlist({prod}) {
  return (
    <div>
       {prod.map((index,id) => (
        <div key={id}>
        <SingleProductsDesign products={index}/>
         </div>
        ))}
    </div>
  )
}

export default SingleProductlist
