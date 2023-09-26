import { Link } from "react-router-dom";

import "./Footer.scss";

const Footer = () => {
    return (
        <footer>
            <nav role='navigation'>
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
        </footer>
    );
};

export default Footer;
