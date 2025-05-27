import { SWIGGY_IMG_ASSETS } from "../utils/constants";

const RestaurantCard = ({ data }) => {
    const { name, cloudinaryImageId, costForTwo, cuisines, avgRating, sla } = data
    const { deliveryTime } = sla;
    return (
        <div className="w-[250px] p-4 m-4 rounded-lg bg-gray-100 hover:bg-gray-200">
            <img className="h-[200px] w-full object-cover rounded-lg" src={`${SWIGGY_IMG_ASSETS}/${cloudinaryImageId}`} alt='cardImg' />
            <div className='textContainer mt-4'>
                <h2 className="font-bold text-xl">{name}</h2>
                <h3 className="text-sm text-gray-600">{cuisines.join(', ')}</h3>
                <h4 className="mt-2">{avgRating} *</h4>
                <h4>{costForTwo}</h4>
                <h4>{deliveryTime} min</h4>
            </div>
        </div>
    )
}

export default RestaurantCard