import { useState } from "react";
import { LOGO } from "../utils/constants";
import foodLogo from "../assets/foodLogo.png"
import { Link } from "react-router-dom";
import OnlineStatus from "./OnlineStatus";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [loginLogoutText, setLoginLogoutText] = useState('Login');
    const onlineStatus = useOnlineStatus();

    return (
        <div className='header flex justify-between bg-slate-200 shadow-md'>
            <OnlineStatus />
            <div className='logoContainer w-40'>
                <Link to={'/'}>
                    <img alt='logo' className='logo' src={foodLogo} />
                </Link>
            </div>
            <div className='navItems pt-10 pr-10'>

                <ul className="flex gap-5 text-xl">
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