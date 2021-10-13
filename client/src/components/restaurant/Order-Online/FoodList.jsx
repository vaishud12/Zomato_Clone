import React from "react";

// components
import FoodItem from "./Fooditem";

const FoodList = (props) => {

    return (
        <>
            <div>
                <h2 className="bg-white top-0 w-full px-2 py-1 z-10 text-xl sticky font-semibold">
                    {props.name}
                </h2>
                {props.items.map((item) => (
                    <FoodItem key={item} id={item} />
                ))}
            </div>
        </>
    );
};

export default FoodList;