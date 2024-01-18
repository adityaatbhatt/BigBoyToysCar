import React, { useState } from 'react';
import './App.css';
import { data } from './components/back/data';
import Connectors from './components/front/Connectors';
function App() 
{
	const productItems = data.productItems;
	const [cartItems, setCartItems] = useState([]);
	const [searchItems, setSearchItems] = useState('');
	
	const addItemsToCart = (productItem) => {
		const alreadyItems = cartItems.find(item => item.product.id === productItem.id);
		if (alreadyItems) {			
			const latestCartUpdate = cartItems.map(item =>
				item.product.id === productItem.id ? { 
				...item, quantity: item.quantity + 1 } 
				: item
			);
			setCartItems(latestCartUpdate);
		} else {
			setCartItems([...cartItems, {product: productItem, quantity: 1}]);
		}
		
	};

	const deleteItemsFromCart = (productItem) => {
		const updatedCart = cartItems.filter(item => item.product.id !== productItem.id);
		setCartItems(updatedCart);
	};

	const handleClearCart = () =>
	{
		setCartItems([]);
	}

	const totalAmountCalculation = () => {
		return cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
	};

	const itemSearchUser = (event) => {
		setSearchItems(event.target.value);
	};

	const filterItems = productItems.filter((productItem) =>
	productItem.name.toLowerCase().includes(searchItems.toLowerCase())
	);

	return (
		<div className="App">
			
			<main className="App-main">
				<Connectors handleClearCart={handleClearCart} searchItems ={searchItems} itemSearchUser={itemSearchUser} productItems={productItems} filterItems={filterItems} addItemsToCart={addItemsToCart} cartItems={cartItems} deleteItemsFromCart={deleteItemsFromCart} totalAmountCalculation={totalAmountCalculation} setCartItems={setCartItems}/>
			</main>
		</div>
	);
}

export default App;
