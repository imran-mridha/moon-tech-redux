import { actionTypes } from "../actionTypes/actionTypes";
import toast from 'react-hot-toast';

const initialState = {
  cart: [],
  wishlist: [],
};

const productReducer = (state = initialState, action) => {
  const selectedProduct  = state.cart.find(product => product._id === action.payload._id)
  const selectedWishlist = state.wishlist.find(product => product._id === action.payload._id)
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      toast.success('Successfully Added!')
      if(selectedProduct){
        const newCart = state.cart.filter(product => product._id !== selectedProduct._id)
        selectedProduct.quantity = selectedProduct.quantity + 1
        return {
          ...state,
          cart : [...newCart, selectedProduct]
        };
      }
      return{
        ...state,
        cart: [...state.cart, {...action.payload, quantity: 1}]
      }
    case actionTypes.REMOVE_FROM_CART:
      if(selectedProduct.quantity > 1){
        toast.success('Successfully Removed!')
        const newCart = state.cart.filter(product => product._id !== selectedProduct._id)
        selectedProduct.quantity = selectedProduct.quantity - 1
        return {
          ...state,
          cart : [...newCart, selectedProduct]
        };
      }
      return{
        ...state,
        cart : state.cart.filter(product => product._id !== action.payload._id)
      }
      case actionTypes.ADD_TO_WISHLIST:
        if(selectedWishlist){
          const newWishlist = state.wishlist.filter(product => product._id !== selectedWishlist._id)
          toast.error('Already Added!!')
          return {
            ...state,
            newWishlist : [...newWishlist, selectedWishlist],
          };
        }
        toast.success('Successfully Added!')
        return{
          ...state,
          wishlist : [...state.wishlist, action.payload]
        }

        case actionTypes.REMOVE_FROM_WISHLIST:
        toast.success('Successfully Removed!')
        return{
          ...state,
          wishlist : state.wishlist.filter(product => product._id !== action.payload._id)
        }
  
    default:
      return state;
  }
}



export default productReducer;