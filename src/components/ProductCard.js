import React from "react";
import { BiListPlus } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  addToCart,
  addToWishlist,
  removeFromCart,
  removeFromWishlist,
} from "../redux/actionCreators/productActions";

import { actionTypes } from "../redux/actionTypes/actionTypes";

const ProductCard = ({ product }) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  return (
    <div
      className="shadow-lg rounded-3xl border  p-3 flex flex-col text-indigo-900 relative"
      key={product._id}
    >
      {pathname.includes("cart") && (
        <div className="bg-indigo-500 absolute top-2 right-2 w-8 h-8 text-white font-bold rounded-full grid place-content-center">
          <p>{product.quantity}</p>
        </div>
      )}
      <div className="h-52 w-52 mx-auto">
        <img src={product.image} alt={product.model} />
      </div>
      <h1 className="font-bold text-center">{product.model}</h1>
      <p className="text-center font-semibold mb-3">Rating: {product.rating}</p>
      <div className=" flex-1">
        <ul className="space-y-2">
          {product.keyFeature.map((feature, id) => {
            return (
              <li key={id} className="text-sm ">
                {feature}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex gap-2 mt-5">
        {pathname.includes("cart") && (
          <button
            onClick={() => dispatch(removeFromCart(product))}
            className="bg-red-500 rounded-full py-1 px-2 flex-1 text-white text-bold"
          >
            Remove From Cart
          </button>
        )}

        {pathname.includes("wishlist") &&
          <button
            onClick={() => dispatch(removeFromWishlist(product))}
            className="bg-red-500 rounded-full py-1 px-2 flex-1 text-white text-bold"
          >
            Remove From Wishlist
          </button>
        }
        {!pathname.includes("cart") && !pathname.includes("wishlist") && (
          <>
            <button
              onClick={() => dispatch(addToCart(product))}
              className="bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold"
            >
              Add to cart
            </button>
            <button
              onClick={() => dispatch(addToWishlist(product))}
              title="Add to wishlist"
              className="bg-indigo-500  py-1 px-2 rounded-full"
            >
              <BiListPlus className="text-white" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
