import React from "react";
import { AiOutlineCompass } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
 
// components
import FloatMenuBtn from "../../components/restaurant/Order-Online/FloatMenuBtn";
import MenuListContainer from "../../components/restaurant/Order-Online/MenuListContainer";
import FoodList from "../../components/restaurant/Order-Online/FoodList";

const OrderOnline = () => {
    return (
        <>
            <div className="w-full h-screen flex ">
                <aside className="hidden md:flex flex-col gap-3 border-r overflow-y-scroll border-gray-200 h-screen w-1/4">
                    <MenuListContainer />
                    <MenuListContainer />
                </aside>

                <div className="w-full px-3 md:w-3/4">
                    <div className="pl-3">
                        <h2 className="text-xl font-semibold">Order online</h2>
                        <h4 className="flex items-center gap-2 font-light text-gray-500">
                            <AiOutlineCompass /> Live Track Your Order | <BiTimeFive /> 45 min
                        </h4>
                    </div>
                    
                    <section className="flex h-screen overflow-y scroll flex col gap-3 md:gap-5">
                        <FoodList
                           title="Recommended"
                           items={[
                               {
                                  price: "1000",
                                  rating: 3,
                                  description:
                                    "1kg contains 6 pcs fresh chicken are marinated in a mixture of freshly ground BBK spices & layered with long grain basmati rice in the handi and slow cooked in the sealed handi. Each biryani order is individually cooked in hand made clay handi and served to you in the same earthenware.",
                                  title: "yummy Food",
                                  image:
                                    "https://b.zmtcdn.com/data/dish_photos/8f8/34063a109d615f3a1282c8488cc038f8.jpg?"
                               },
                           ]}
                        />
                    </section>
                </div>

            </div>

        <FloatMenuBtn />
        </>
    );
};

export default OrderOnline;
