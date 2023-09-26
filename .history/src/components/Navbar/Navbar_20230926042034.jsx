import { Link } from "react-router-dom";

import "./Navbar.scss";

const Navbar = () => {
    return (
        <section className='navbar' role='navigation'>
            <Link to='/'>
                <img src='logo.png' alt='Ingredient Matcher logo' />
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/search'>Search</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                </ul>
            </nav>
        </section>
    );
};

export default Navbar;