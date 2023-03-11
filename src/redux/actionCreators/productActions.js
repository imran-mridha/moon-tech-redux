import { actionTypes } from "../actionTypes/actionTypes";

export const addToCart =(product)=> {
  return{
    type : actionTypes.ADD_TO_CART,
    payload: product
  }
}

export const removeFromCart = (product) => {
  return{
    type : actionTypes.REMOVE_FROM_CART,
    payload: product
  }
}


export const addToWishlist = (product) => {
  return{
    type : actionTypes.ADD_TO_WISHLIST,
    payload: product
  }
}

export const removeFromWishlist = (product) => {
  return{
    type : actionTypes.REMOVE_FROM_WISHLIST,
    payload: product
  }
}