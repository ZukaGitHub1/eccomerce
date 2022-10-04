
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardProductsList from "../../components/cardProducts/CardProductsList";
import Loader from "../../components/loader/Loader";


const CategoryPage = () => {
  const [categories, setCategories] = useState([]);
  const[loader,setLoader] = useState(true);
  const params = useParams();

  useEffect(() => { 

    fetch(
      `https://academy-products.herokuapp.com/api/products/category/${params.id}`
    )
      .then((res) => res.json())
      .then((data) =>
      setCategories(data.data))
      .catch((err) => {
        console.error(err);
      });
    setLoader(false)
  }, [params.id]);


console.log(categories)
  return (
    <div>
     {(loader) ? <Loader/> : <CardProductsList list={categories} />}
    </div>
  );
};
export default CategoryPage;
