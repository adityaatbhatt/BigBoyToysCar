import React from 'react'
import { Routes, Route } from 'react-router-dom'
import UserCartComponent from './UserCartComponent'
import ShowItemComponent from './ShowItemComponent'
import SignUp from './SingnIp'


const Connectors = ({ handleClearCart, searchItems, itemSearchUser, productItems, filterItems, addItemsToCart, cartItems, deleteItemsFromCart, totalAmountCalculation, setCartItems }) => {
  return (
    <div style={{width:"100%", margin:"0"}}>
      <Routes>
        <Route path='/' element={<ShowItemComponent
          searchItems={searchItems}
          itemSearchUser={itemSearchUser}
					productItems={productItems}
					filterItems={filterItems}
					addItemsToCart={addItemsToCart}
				/>}></Route>

<Route path='/signup' element={<SignUp/>}></Route>

        <Route path='/cart' element={<UserCartComponent 
        cartItems={cartItems} 
        deleteItemsFromCart={deleteItemsFromCart} 
        totalAmountCalculation={totalAmountCalculation} 
        setCartItems={setCartItems}
        handleClearCart={handleClearCart}
        />}></Route>
      </Routes>
    </div>
  )
}

export default Connectors