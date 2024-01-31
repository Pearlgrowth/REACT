import React,{useContext} from 'react'
import cart from '../../assets/cart.jpeg'
import CartContext from '../../Context/CartContext'
function NavBar() {
  const {cartState, dispatch} = useContext(CartContext)
   function handleSideBar(){
    dispatch({type: 'OPENSIDEBAR'})
   }
  return (
    <button onClick={() => handleSideBar}>
      {console.log(cartState)}
  <span>{cartState.movies.length}</span>
<img src={cart} alt="" />

    </button>
    
    
  )
}

export default NavBar