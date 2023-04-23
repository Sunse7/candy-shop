import { Link } from "react-router-dom";

function Header() {
    return ( 
        <header>
            <h1>HEADER</h1>
            <Link to='/cart'>
                <img src="/images/shopping-cart.svg" width='25px' height='25px' alt="Shopping cart" />
            </Link>
        </header>
     );
}

export default Header;