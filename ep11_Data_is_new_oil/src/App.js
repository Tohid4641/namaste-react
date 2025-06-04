import React, { lazy, Suspense, use, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import UserContext from './utils/UserContext';

const Grocery = lazy(() => import('./components/Grocery'))

const AppLayout = () => {
    const [user, setUser] = useState();

    // Authentication
    useEffect(() => {
        // User API call Here

        setUser("Tauhid Shaikh")
    }, [])

    return (
        <UserContext.Provider value={{ loggedInUser: user, setUser }}>
            <div className='app'>
                <Header />
                <Outlet />
            </div>
        </UserContext.Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/grocery',
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/restaurants/:resId',
                element: <RestaurantMenu />
            }
        ],

    },

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);