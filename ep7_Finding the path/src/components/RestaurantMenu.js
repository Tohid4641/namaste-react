import { useEffect } from "react";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null)

    useEffect(() => {
        fetchMenu()
    }, [])

    const fetchMenu = async () => {
        try {
            const res = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=234875&catalog_qa=undefined&submitAction=ENTER')
            console.log(res)
        } catch (error) {
            console.error(error)
        }
    }
    return resInfo === null ? <Shimmer /> : (
        <div className="res-menu">
            <h1>Name of the Restaurants</h1>
            <h2>Menu</h2>

            <ul>
                <li>Biryani</li>
                <li>Burgers</li>
                <li>Diet Coke</li>
            </ul>
        </div>
    )
}
export default RestaurantMenu;