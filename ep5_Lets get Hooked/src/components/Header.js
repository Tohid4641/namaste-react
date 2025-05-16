import { LOGO } from "../utils/constants";

const Header = () => {
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
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};

export default Header;