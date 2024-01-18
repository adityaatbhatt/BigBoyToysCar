import './Header.css';
import { Link } from 'react-router-dom'

const Header = ()=>
{
    return(
        <header className='App-header'>
				<div className='header'>
					<h1>
						<Link to="/" className='btn btn-dark btn-lg'>Home</Link>
					</h1>

					<h1>
						<Link to="/signup" className='btn btn-dark btn-lg'>Sign Up</Link>
					</h1>

					<h1>
						<Link to="/cart" className='btn btn-dark btn-lg'>Cart</Link>
					</h1>
				</div>

                <div>
					<h1>
                    	<Link to="/" className='links enlarge'>Big Boy Toys</Link>
                	</h1>
				</div>
                <br/>
                <h1  className='enlarge'>Welcome!</h1>	
			</header>
            
			
			
    )
};export default Header;