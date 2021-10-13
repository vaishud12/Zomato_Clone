import React, { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { HiPlus } from "react-icons/hi";
import { useDispatch } from "react-redux";


import { getFood } from "../../../Redux/Reducer/Food/Food.action";
import { getImage } from "../../../Redux/Reducer/Image/Image.action";
import { addCart } from "../../../Redux/Reducer/Cart/Cart.action";


const FoodItem = (props) => {
  const [food, setFood] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFood(props.id)).then((data) => {
      setFood(data.payload.foods);
      dispatch(getImage(data.payload.foods?.photos)).then((data) => {
        const { images } = data.payload.image;
        images.length &&
          setFood((prev) => ({ ...prev, image: images[0].location }));
      });
    });
  }, []);

  const addFoodToCart = () => {
    dispatch(addCart({ ...food, quantity: 1, totalPrice: food.price }));
    setFood((prev) => ({ ...prev, isAddedToCart: true }));
  };

  return (
    <>
      {food?.name && (
        <div className="flex items-start lg:gap-2 mt-2 ">
          {food?.image && (
            <div className="lg:w-2/12 lg:h-34 md:h-26 md:w-28  w-full h-full p-2 lg:px-2">
              <img
                src={food?.image}
                alt="food"
                className="w-full h-full rounded-lg"
              />
            </div>
          )}
          <div className="w-8/12 md:3/6 mt-2 flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">{food?.name}</h3>
              <button
                onClick={addFoodToCart}
                disabled={food.isAddedToCart}
                className=" md:hidden flex h-8 w-17 items-center font-bold text-zomato-400 bg-zomato-50 border border-zomato-400 px-2 py-1 rounded-lg"
              >
                {food.isAddedToCart ? (
                  "Added"
                ) : (
                  <>
                    Add <HiPlus className="mb-2" />{" "}
                  </>
                )}{" "}
              </button>
            </div>
            <ReactStars count={5} value={food?.rating || 0} />
            <h5>₹{food?.price}</h5>
            <p className="truncate">{food?.descript}</p>
          </div>
          <div className="hidden md:block w-2/12 ">
            <button
              onClick={addFoodToCart}
              disabled={food.isAddedToCart}
              className=" flex h-8 w-17 items-center font-bold text-zomato-400 bg-zomato-50 border border-zomato-400 px-4 py-2 rounded-lg"
            >
              {food.isAddedToCart ? (
                "Added"
              ) : (
                <>
                  Add <HiPlus className="mb-2" />{" "}
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FoodItem;