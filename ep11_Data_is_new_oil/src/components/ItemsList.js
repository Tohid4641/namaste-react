import { SWIGGY_IMG_ASSETS } from "../utils/constants"

const ItemsList = ({ items }) => {
  console.log(items, "ItemList")
  
  return (
    <div className="w-full">
      {
        items.map((item) => (
          <div className="p-2 m-2 border-b-2 text-left flex " key={item?.card?.info?.id}>

            <div className="w-9/12">
              <div className="py-2">
                <span className="">{item?.card?.info?.name}</span>
                <span> - ₹ {item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}</span>
              </div>
              <p className="text-xs">{item?.card?.info?.description}</p>
            </div>

            <div className="w-3/12 p-4">
              <div className="absolute mx-auto my-auto">
                <button className="p-2 shadow-lg bg-green-600 text-white rounded-lg">ADD +</button>
              </div>
              <img className="w-full" src={SWIGGY_IMG_ASSETS + '/' + item?.card?.info?.imageId} />

            </div>
          </div>
        ))
      }
    </div>
  )
}

export default ItemsList