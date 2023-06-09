import React from 'react';
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";


const Wishlist = () => {

  const wishlist = useSelector((state) => state.wishlist)

  return (
    <div className="">
      {!wishlist.length ? (
        <>
          <p className="flex justify-center items-center h-screen text-gray-300 text-2xl">wishlist is empty !!!</p>
        </>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
          {
            wishlist
            .sort((a, b) => a._id - b._id)
            .map((product) => <ProductCard key={product._id} product={product} />)
          }
        </div>
      )}
    </div>
  );
};

export default Wishlist;