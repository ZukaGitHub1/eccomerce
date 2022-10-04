import React from 'react'

function SingleProductsDesign({products}) {
    const {title ,  img ,price } = products
  return (
    <main className="container">
 
  
  <div className="left-column">
    <img data-image="white" src={img} alt="" />
    
  </div>
 
 
 
  <div className="right-column">
 
    
    <div className="product-description">
      <span>{products.brand}</span>
      <h1>{title}</h1>

      <p>Specifications</p>
      <p>Rate: {products.spec?.rate}</p>
      <p>Core: {products.spec?.type}</p>
      <p>Display: {products.spec?.dpType}</p>
      <p>SSD : {products.spec?.ssd}</p>
    </div>
 
    
    <div className="product-configuration">
 
      
      <div className="product-color">
        <span>Color</span>
 
        <div className="color-choose">
          <div>
            <input data-image="red" type="radio" id="red" name="color" value="red"  />
            <label htmlFor="red"><span></span></label>
          </div>
          <div>
            <input data-image="blue" type="radio" id="blue" name="color" value="blue" />
            <label htmlFor="blue"><span></span></label>
          </div>
          <div>
            <input data-image="black" type="radio" id="black" name="color" value="black" />
            <label htmlFor="black"><span></span></label>
          </div>
        </div>
 
      </div>
 
   
      <div className="cable-config">
        <span>Cable configuration</span>
 
        <div className="cable-choose">
          <button>Straight</button>
          <button>Coiled</button>
          <button>Long-coiled</button>
        </div>
 
        <a href="?">How to configurate your {title}</a>
      </div>
    </div>
 
    
    <div className="product-price">
      <span>{price}</span>
      <a aria-disabled href="?" className="cart-btn">Add to cart</a>
    </div>
  </div>
</main>
  )
}

export default SingleProductsDesign
