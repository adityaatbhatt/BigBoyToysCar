import React from 'react';
import './UserCartComponent.css'
import Header from './Header';
function UserCartComponent({
	cartItems,
	deleteItemsFromCart,
	totalAmountCalculation,
	setCartItems,
	handleClearCart
}) {
return (
	<><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
	integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4"
	crossorigin="anonymous"></link>
	<Header/>

<div className={`cart`}>
	<h2>Cart</h2>
	{cartItems.length === 0 ? (
	<p className="empty-cart">Your cart is empty.</p>
	) : (
<div>
	<ul>
		{cartItems.map((item) => (
			<li key={item.product.id} className="cart-item">
				<div>
					<div className="item-info">
						<div className="item-image">
							<img src={item.product.image} 
								alt={item.product.name} />
						</div>
						<div className="item-details">
							<h3>{item.product.name}</h3>
							<p>Price: ₹{item.product.price}</p>
						</div>
					</div>
					<div>
						<div className="item-actions">
							<button
								className="btn btn-secondary"
								onClick={() => 
									deleteItemsFromCart(item.product)}>
								Remove Product
							</button>
							<div className="quantity">
								<button className ="btn btn-secondary"
									onClick={(e) => {
										setCartItems((prevCartCourses) => {
											const updatedCart = prevCartCourses.map(
												(prevItem) =>
												prevItem.product.id === item.product.id
												? { ...prevItem, quantity:
													Math.max(item.quantity - 1, 1) }
													: prevItem
													);
													return updatedCart;
												})
											}}>-</button>
								<p className='m-2'>{item.quantity} </p>
											<button className ="btn btn-secondary"  
												onClick={(e) => {
													setCartItems((prevCartCourses) => {
													const updatedCart = prevCartCourses.map(
													(prevItem) =>
													prevItem.product.id === item.product.id
															? { ...prevItem, quantity: 
															item.quantity + 1 }
															: prevItem
													);
													return updatedCart;
												})
											}}>+</button>
							</div>
						</div>
					</div>
				</div>
			</li>
		))}
	</ul>
	<button
			className="btn btn-secondary"
			disabled={cartItems.length === 0 || 
				totalAmountCalculation() === 0} >
			Proceed to Payment
	</button><br/> <br/>
	<button className='btn btn-secondary' onClick={handleClearCart}>Clear</button><br/>
	<div className="checkout-section">
		<div className="checkout-total">
			<p className="total">Total Amount: 
				₹{totalAmountCalculation()}
			</p>
		</div>
	</div>
	
</div>
			)}
</div></>
	);
}

export default UserCartComponent;
