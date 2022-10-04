import axios from "axios";
import { useEffect, useState } from "react";
import SearchBar from '../searchbar/SearchBar'
import CardProductsList from "./CardProductsList";
const allproductlink = "http://academy-products.herokuapp.com/api/products";

const CardProducts = () => {
  const [productsCard, setProductsCard] = useState([]);
const [result, setResult] = useState("");
const [searchFilter, setSearchFilter] = useState([]);
  useEffect(() => {
    try {
      fetch(`${allproductlink}`)
        .then((res) => res.json())
        .then(product => (
          setProductsCard(product.data)
             ))
    } catch(err) {
      console.log(err);
    }
  }, []);
   useEffect( () => {
    const json = { query: result };
    axios.post('https://academy-products.herokuapp.com/api/products/search', 
     json)
    .then( res =>  setSearchFilter(res.data.data))
    .catch(err => (
      console.error(err)
    ))
   
   },[result]) 
 
   
   useEffect(() =>{
    const results = searchFilter.filter(resp =>
       resp.title.toLowerCase().includes(result.toLocaleLowerCase())
    );
    console.log(results)
      setProductsCard(results)
  },[result, searchFilter])
     
console.log(searchFilter)
const onChange = (evt) => {
setResult(evt.target.value);
}

        
  
  return (
    <div >
     <SearchBar value={result}
            onChange={onChange}/>
      <CardProductsList  list={productsCard} />
    </div>
  );
};

export default CardProducts;
