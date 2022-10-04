import React from "react";
import { useNavigate } from "react-router-dom";

function CardProductsdesign({ products }) {
  const { img, title, price , id } = products; 
  const navigate =  useNavigate();
  return (
    <div>
      <div  className ="card">
        <div className="imgBox">
          <img src={img} alt="img-sound" className="mouse" />
        </div>

        <div className="contentBox">
          <h4>{title}</h4>
          <h2 className="price">{price} €</h2>
          <button onClick={() => { navigate(
            `/main/category/meta/${id}`
          )}} className="buy">მეტის ნახვა</button>
        </div>
      </div>
    </div>
  );
}

export default CardProductsdesign;
