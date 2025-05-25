import RestaurantCard from "./restaurantCard.js";
import { useState } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useRestaurants from "../utils/useRestaurants.js";

const Body = () => {
    const [searchText, setSearchText] = useState("");

    const {
        restaurantsData,
        setRestaurantsData,
        filteredRestaurantsData,
        setFilteredRestaurantsData,
        loading
    } = useRestaurants();

    if (loading) return <Shimmer />;

    return (
        <div className='body'>

            <div className="topContainer">
                <div className='searchContainer'>
                    <input className='searchBar' value={searchText} onChange={(e) => { setSearchText(e.target.value) }} type='text' />
                    <button className='searchBtn btn' onClick={() => {
                        setFilteredRestaurantsData(restaurantsData.filter((res) => res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())))
                    }}>Search</button>
                </div>

                <div className="filterContainer">
                    <button onClick={() => {
                        setRestaurantsData(restaurantsData.filter((res) => res?.info?.avgRating > 4))
                    }} className='filterBtn btn'>Top Rated</button>
                </div>
            </div>


            <div className='cardContainer'>
                {
                    filteredRestaurantsData?.map((restaurant) => {
                        return (<Link to={`/restaurants/${restaurant?.info?.id}`} key={restaurant?.info?.id}><RestaurantCard data={restaurant?.info} /></Link>)
                    })
                }
            </div>

        </div>
    )
}

export default Body;