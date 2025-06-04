import { useState } from "react"
import ItemsList from "./ItemsList"

const ItemsCategory = ({ data, showItems, setShowIndex }) => {
    return (
        <div className="w-9/12 mx-auto shadow-lg my-4">
            {/**Header */}
            <div onClick={() => setShowIndex()} className="cursor-pointer p-4 rounded-lg flex justify-between">
                <span className="font-bold text-lg">{data?.title} ({data?.itemCards?.length})</span>
                <span className="font-bold text-2xl ">{showItems ? "↑" : "↓"}</span>
            </div>
            {/**Body */}
            {/* {showItems && <ItemsList items={data?.itemCards} />} */}
            <div
                className={`transition-all duration-500 overflow-hidden ${showItems ? "opacity-100" : "max-h-0 opacity-0"}`}
            >
                <ItemsList items={data?.itemCards} />
            </div>

        </div>
    )
}

export default ItemsCategory