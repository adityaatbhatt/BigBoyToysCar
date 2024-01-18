import React from 'react';
import './ShowItemComponent.css';
import SearchComponent from './SearchComponent';
function ShowItemComponent({ productItems, searchItems, itemSearchUser, filterItems, addItemsToCart }) {
	return (
		<>
		<SearchComponent 
		searchItems={searchItems} 
		itemSearchUser={itemSearchUser} />

		<div className='container'>
			<div className="product-list row row-cols-sm-1">
			{filterItems.length === 0 ? (
				<p className="no-results">
					Sorry, No matching Product found. We will let you Know once product is available.
				</p>
			) : (
				filterItems.map((product) => (
					<div className="product col-auto " style={{width: "350px", maxWidth: "350px"}} key={product.id}>
						<div>
							<img src={product.image} alt={product.name} />
						</div>
						<div>
							<h2 className='pruduct-name'>{product.name}</h2>
							<p>Price: ₹{product.price}</p>
						</div>
						<div>
							<button className="btn btn-secondary rounded" onClick={() => addItemsToCart(product)}>
							Add to Shopping Cart </button>
						</div>
					</div>
				))
			)}
		</div></div></>
	);
}

export default ShowItemComponent;
