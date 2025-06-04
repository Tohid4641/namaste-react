import { useContext, useState } from "react";
import { LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import OnlineStatus from "./OnlineStatus";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
    const [loginLogoutText, setLoginLogoutText] = useState('Login');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);

    return (
        <header className='sticky top-0 z-50 bg-white shadow-lg'>
            <div className='max-w-6xl mx-auto px-4 py-4'>
                <div className='flex items-center justify-between'>
                    {/* Logo Section */}
                    <div className='flex items-center'>
                        <Link to={'/'} className='flex items-center space-x-2'>
                            <img 
                                alt='logo' 
                                className='w-12 h-12 object-contain' 
                                src={LOGO}
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className='hidden md:flex items-center space-x-8'>
                        <div className='flex items-center space-x-1'>
                            <span className='text-sm'>Status:</span>
                            <span>{onlineStatus ? "🟢" : "🔴"}</span>
                        </div>
                        <Link to={'/'} className='nav-link'>Home</Link>
                        <Link to={'/about'} className='nav-link'>About</Link>
                        <Link to={'/contact'} className='nav-link'>Contact</Link>
                        <Link to={'/grocery'} className='nav-link'>Grocery</Link>
                        <Link to={'/cart'} className='nav-link'>Cart</Link>
                        <button 
                            onClick={() => {
                                setLoginLogoutText(loginLogoutText === 'Login' ? 'Logout' : 'Login')
                            }}
                            className='px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors'
                        >
                            {loginLogoutText}
                        </button>
                        { loginLogoutText === 'Logout' && <Link className='nav-link'>Welcome, {loggedInUser}</Link> }
                        
                    </nav>

                    {/* Mobile Menu Button */}
                    <button 
                        className='md:hidden p-2 rounded-md hover:bg-gray-100'
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className='md:hidden mt-4 py-2 border-t'>
                        <div className='flex items-center space-x-1 px-4 py-2'>
                            <span className='text-sm'>Status:</span>
                            <span>{onlineStatus ? "🟢" : "🔴"}</span>
                        </div>
                        <Link to={'/'} className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>Home</Link>
                        <Link to={'/about'} className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>About</Link>
                        <Link to={'/contact'} className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>Contact</Link>
                        <Link to={'/grocery'} className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>Grocery</Link>
                        <Link to={'/cart'} className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>Cart</Link>
                        <div className='px-4 py-2'>
                            <button 
                                onClick={() => {
                                    setLoginLogoutText(loginLogoutText === 'Login' ? 'Logout' : 'Login');
                                    setIsMenuOpen(false);
                                }}
                                className='w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors'
                            >
                                {loginLogoutText}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;