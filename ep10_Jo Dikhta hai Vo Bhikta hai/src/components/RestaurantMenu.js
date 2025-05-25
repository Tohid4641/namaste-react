import Shimmer from "./Shimmer";
import { SWIGGY_IMG_ASSETS } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {

    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId)

    if (resInfo === null) return <Shimmer />;


    const { name, cuisines, costForTwoMessage, cloudinaryImageId, avgRating } = resInfo?.cards[2]?.card?.card?.info
    const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards

    return (
        <div className="resMenu-container">
            <div className="resInfo-container">
                <h1>{name}</h1>
                <div className="resInfo-details">
                    <div className="resInfo-details-text">
                        <h3>{cuisines?.join(', ')} - {costForTwoMessage}</h3>
                        <h4>{avgRating} *</h4>
                    </div>
                    <img src={`${SWIGGY_IMG_ASSETS}/${cloudinaryImageId}`} alt="header" />
                </div>
            </div>

            <div className="resMenu-items">
                <h2>Menu</h2>

                { itemCards &&
                    itemCards.map(itemCard=>{
                        const { id, name, imageId, price,defaultPrice, description,  } = itemCard?.card?.info
                        return (
                            <div key={id} className="menu-item-container">
                                <div className="menu-item-details">
                                    <span className="menu-item-details-name">{name}</span>
                                    <span> Rs. {price/100 || defaultPrice/100} /- ONLY</span>
                                    <span>{description}</span>
                                </div>
                                <div className="menu-item-img">
                                    <img src={`${SWIGGY_IMG_ASSETS}/${imageId}`} alt="menu-img" />
                                    <button>ADD</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default RestaurantMenu;