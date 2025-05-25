import { useEffect, useState } from "react";
import { RESTAURANT_MENU_API } from "./constants"

const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu()
    }, [])

    const fetchMenu = async () => {
        try {
            const res = await fetch(`${RESTAURANT_MENU_API}&restaurantId=${resId}`)
            const json = await res.json()
            setResInfo(json?.data)

        } catch (error) {
            console.error(error)
        }
    }

    return resInfo;
}

export default useRestaurantMenu;