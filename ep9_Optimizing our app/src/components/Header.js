import { useState } from "react";
import { LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import OnlineStatus from "./OnlineStatus";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [loginLogoutText, setLoginLogoutText] = useState('Login');
    const onlineStatus = useOnlineStatus();

    return (
        <div className='header'>
            <OnlineStatus/>
            <div className='logoContainer'>
                <Link to={'/'}>
                <img alt='logo' className='logo' src={LOGO} />
                </Link>
            </div>
            <div className='navItems'>
                <ul>
                    <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={"/about"}>About</Link></li>
                    <li><Link to={'/contact'}>Contact</Link></li>
                    <li><Link to={'/grocery'}>Grocery</Link></li>
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