import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SingleProductlist from './SingleProductlist';




const SingleProduct = () => {
    
      const [single, setSingle] = useState([]);
      
      const {id} = useParams();

      useEffect(() => {
        fetch(`https://academy-products.herokuapp.com/api/products/${id}`)
        .then((res) => res.json())
        .then((data) => (
          setSingle(data.data)
        ))
        .catch(err => {
          console.error(err)
        })
    }, [id])

   
  return <div>
        
         <SingleProductlist prod={[single]}/>
    </div>
  
}

export default SingleProduct
