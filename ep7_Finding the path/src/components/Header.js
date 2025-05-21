import { useState } from "react";
import { LOGO } from "../utils/constants";

const Header = () => {

    const [loginLogoutText, setLoginLogoutText] = useState('Login')

    return (
        <div className='header'>
            <div className='logoContainer'>
                <img alt='logo' className='logo' src={LOGO} />
            </div>
            <div className='navItems'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li onClick={() => {
                        setLoginLogoutText(loginLogoutText === 'Login' ? 'Logout' : 'Login')
                    }}>{loginLogoutText}</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};

export default Header;