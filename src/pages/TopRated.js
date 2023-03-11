import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const TopRated = () => {

  const [products, setProducts] = useState([])
  useEffect(()=>{
    fetch("products.json")
    .then(res => res.json())
    .then(data => setProducts(data))
  },[])

  const topRated = products.filter(product => product.rating >= 4)

  console.log(topRated);

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      {
        topRated.map(product => <ProductCard key = {product._id} product = {product} />)
      }
    </div>
  );
};

export default TopRated;
