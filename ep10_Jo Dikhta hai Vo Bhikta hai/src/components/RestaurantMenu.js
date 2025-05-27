import Shimmer from "./Shimmer";
import { SWIGGY_IMG_ASSETS } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage, cloudinaryImageId, avgRating } = resInfo?.cards[2]?.card?.card?.info;
    const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            {/* Restaurant Info Section */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <div className="md:flex md:justify-between md:items-center">
                    <div className="mb-4 md:mb-0">
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">{name}</h1>
                        <p className="text-gray-600 mb-2">{cuisines?.join(', ')}</p>
                        <p className="text-gray-600 mb-2">{costForTwoMessage}</p>
                        <div className="flex items-center">
                            <span className="bg-green-500 text-white px-2 py-1 rounded">
                                ⭐ {avgRating}
                            </span>
                        </div>
                    </div>
                    <div className="w-full md:w-[300px]">
                        <img 
                            className="w-full h-[200px] object-cover rounded-lg shadow-md" 
                            src={`${SWIGGY_IMG_ASSETS}/${cloudinaryImageId}`} 
                            alt={name} 
                        />
                    </div>
                </div>
            </div>

            {/* Menu Section */}
            <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Menu</h2>
                <div className="space-y-6">
                    {itemCards && itemCards.map(itemCard => {
                        const { id, name, imageId, price, defaultPrice, description } = itemCard?.card?.info;
                        return (
                            <div key={id} className="flex flex-col md:flex-row justify-between items-center border-b pb-6 last:border-b-0">
                                <div className="w-full md:w-2/3 mb-4 md:mb-0 md:pr-4">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                        {name}
                                    </h3>
                                    <p className="text-green-600 font-medium mb-2">
                                        ₹{price/100 || defaultPrice/100}
                                    </p>
                                    {description && (
                                        <p className="text-gray-600 text-sm">
                                            {description}
                                        </p>
                                    )}
                                </div>
                                <div className="w-full md:w-1/3 relative">
                                    {imageId && (
                                        <div className="relative">
                                            <img 
                                                className="w-full h-[150px] object-cover rounded-lg" 
                                                src={`${SWIGGY_IMG_ASSETS}/${imageId}`} 
                                                alt={name} 
                                            />
                                            <button className="absolute bottom-2 right-2 bg-white text-green-600 px-4 py-2 rounded-lg font-medium shadow-md hover:bg-green-50 transition-colors">
                                                ADD +
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default RestaurantMenu;