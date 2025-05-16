import { SWIGGY_IMG_ASSETS } from "../utils/constants";

const RestaurantCard = ({ data }) => {
    const { name, cloudinaryImageId, costForTwo, cuisines, avgRating, sla } = data
    const { deliveryTime } = sla;
    return (
        <div className='card'>
            <img src={`${SWIGGY_IMG_ASSETS}/${cloudinaryImageId}.jpg`} alt='cardImg' />
            <div className='textContainer'>
                <h2>{name}</h2>
                <h3>{cuisines.join(', ')}</h3>
                <h4>{avgRating} *</h4>
                <h4>{costForTwo}</h4>
                <h4>{deliveryTime} min</h4>
            </div>
        </div>
    )
}

export default RestaurantCard