import RestaurantCard from "./restaurantCard";
import { restaurants } from "../utils/data";
import { useState } from "react";

const Body = () => {
    const [restaurantsData, setRestaurantsData] = useState(restaurants || []);

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
                    restaurantsData.map((restaurant) => (
                        <RestaurantCard key={restaurant?.info?.id} data={restaurant?.info} />
                    ))
                }
            </div>

        </div>
    )
}

export default Body;