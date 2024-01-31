import React,{useReducer} from 'react'
import CartContext from './CartContext'
import cartReducer from '../Reducers/CartReducer'
function CartContextProvider({children}) {
  const[cartState,dispatch]= useReducer(cartReducer,{ sidebarIsOpen: false, movies: []})
  return (
 <CartContext.Provider value={{cartState,dispatch}}>
    
    {children}
 </CartContext.Provider>
  )
}

export default CartContextProvider