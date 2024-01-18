import React from 'react';
import './SearchComponent.css'
import Header from './Header';

function SearchComponent({ searchItems, itemSearchUser }) {
	return (
		<header>
			<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
			integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4"
			crossorigin="anonymous"></link>
			<Header/>
			<h1  className='enlarge'>Welcome!</h1>
			<div className="search-bar">
				<input
					type="text"
					placeholder="Search for Products"
					value={searchItems}
					onChange={itemSearchUser}
				/>
			</div>
			<br/>
		</header>
	);
}

export default SearchComponent;
