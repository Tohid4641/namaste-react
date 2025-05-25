import { useEffect, useState } from "react";
import { SWIGGY_RESTAURANTS_API } from "./constants";

const useRestaurants = () => {

    const [restaurantsData, setRestaurantsData] = useState([]);
    const [filteredRestaurantsData, setFilteredRestaurantsData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchRestaurants()
    }, [])

    const fetchRestaurants = async () => {
        try {
            const res = await fetch(SWIGGY_RESTAURANTS_API);
            const json = await res.json();
            setRestaurantsData(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            setFilteredRestaurantsData(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        } catch (error) {
            console.error("Failed to fetch restaurants", error);
        } finally {
            setLoading(false);
        }
    }

    return {
        restaurantsData,
        setRestaurantsData,
        filteredRestaurantsData,
        setFilteredRestaurantsData,
        loading
    }
}

export default useRestaurants;