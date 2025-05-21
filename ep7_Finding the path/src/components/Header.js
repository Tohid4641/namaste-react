import { useState } from "react";
import { LOGO } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {

    const [loginLogoutText, setLoginLogoutText] = useState('Login')

    return (
        <div className='header'>
            <div className='logoContainer'>
                <img alt='logo' className='logo' src={LOGO} />
            </div>
            <div className='navItems'>
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={"/about"}>About</Link></li>
                    <li><Link to={'/contact'}>Contact</Link></li>
                    <li onClick={() => {
                        setLoginLogoutText(loginLogoutText === 'Login' ? 'Logout' : 'Login')
                    }}>{loginLogoutText}</li>
                    <li><Link to={'/cart'}>Cart</Link></li>
                </ul>
            </div>
        </div>
    )
};

export default Header;