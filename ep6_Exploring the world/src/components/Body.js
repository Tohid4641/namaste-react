import RestaurantCard from "./restaurantCard";
import { useEffect, useState } from "react";

const Body = () => {
    const [restaurantsData, setRestaurantsData] = useState([]);

    // cards[4].card.card.gridElements.infoWithStyle.restaurants[0,1,2].info

    useEffect(() => {
        fetchRestaurants()
    }, [])

    const fetchRestaurants = async () => {
        const res = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json = await res.json();
        setRestaurantsData(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    return (
        <div className='body'>

            <div className="topContainer">
                <div className='searchContainer'>
                    <input className='searchBar' type='text' />
                    <button className='searchBtn btn'>Search</button>
                </div>

                <div className="filterContainer">
                    <button onClick={() => {
                        setRestaurantsData(restaurantsData.filter((res) => res?.info?.avgRating > 4))
                    }} className='filterBtn btn'>Top Rated</button>
                </div>
            </div>


            <div className='cardContainer'>
                {
                    restaurantsData.map((restaurant) => {
                        return (<RestaurantCard key={restaurant?.info?.id} data={restaurant?.info} />)
                    })
                }
            </div>

        </div>
    )
}

export default Body;