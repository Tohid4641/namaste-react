import RestaurantCard, { WithDiscountLabel } from "./RestaurantCard.js";
import { useContext, useState } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useRestaurants from "../utils/useRestaurants.js";
import UserContext from "../utils/UserContext.js";

const Body = () => {
    const { setUser, loggedInUser } = useContext(UserContext)
    const [searchText, setSearchText] = useState("");
    const {
        restaurantsData,
        setRestaurantsData,
        filteredRestaurantsData,
        setFilteredRestaurantsData,
        loading
    } = useRestaurants();

    if (loading) return <Shimmer />;

    const RestaurantCardDiscount = WithDiscountLabel(RestaurantCard);

    

    return (
        <div className='min-h-screen bg-gray-50'>
            <div className='max-w-7xl mx-auto px-4 py-8'>
                {/* Search and Filter Section */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 p-4 bg-white rounded-lg shadow-sm">
                    {/* Search Container */}
                    <div className='flex flex-1 max-w-md gap-2'>
                        <input
                            className='flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all'
                            placeholder="Search restaurants..."
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                            type='text'
                        />
                        <button
                            className='px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors'
                            onClick={() => {
                                setFilteredRestaurantsData(
                                    restaurantsData.filter((res) =>
                                        res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
                                    )
                                )
                            }}
                        >
                            Search
                        </button>
                        <input onChange={(e)=>setUser(e.target.value)} value={loggedInUser} className="ml-10 px-4 py-2 border border-gray-3000" type="text" placeholder="change your name" />
                    </div>

                    {/* Filter Button */}
                    <button
                        onClick={() => {
                            setFilteredRestaurantsData(
                                restaurantsData.filter((res) => res?.info?.avgRating > 4)
                            )
                        }}
                        className='px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors'
                    >
                        Top Rated
                    </button>
                </div>

                {/* Restaurant Cards Grid */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                    {filteredRestaurantsData?.map((restaurant) => (

                        <Link
                            to={`/restaurants/${restaurant?.info?.id}`}
                            key={restaurant?.info?.id}
                            className="block transform hover:-translate-y-1 transition-transform duration-200"
                        >
                            {
                                restaurant?.info?.aggregatedDiscountInfoV3 ?
                                    (<RestaurantCardDiscount data={restaurant?.info} />) :
                                    (<RestaurantCard data={restaurant?.info} />)
                            }

                        </Link>
                    ))}
                </div>

                {/* No Results Message */}
                {filteredRestaurantsData?.length === 0 && (
                    <div className="text-center py-10">
                        <h2 className="text-2xl font-semibold text-gray-600">
                            No restaurants found
                        </h2>
                        <p className="text-gray-500 mt-2">
                            Try adjusting your search or filters
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Body;