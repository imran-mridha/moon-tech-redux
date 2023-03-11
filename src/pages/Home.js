import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const Home = () => {

  const [products, setProducts] = useState([])
  useEffect(()=>{
    fetch("products.json")
    .then(res => res.json())
    .then(data => setProducts(data))
  },[])

  
  const state = useSelector((state => state))

  console.log(state);

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      {/* <h1>This is home page</h1> */}
      {
        products.map((product, id) => <ProductCard key = {id} product = {product} />)
      }
    </div>
  );
};

export default Home;
