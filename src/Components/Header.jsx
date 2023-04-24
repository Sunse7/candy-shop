import { Link } from "react-router-dom";
import styles from './Header.module.scss';

function Header() {
    return ( 
        <header className={styles.header}>
            <h1>HEADER</h1>
            <Link to='/cart' className={styles.link}>
                <img src="/images/shopping-cart.svg" width='25px' height='25px' alt="Shopping cart" />
            </Link>
        </header>
     );
}

export default Header;