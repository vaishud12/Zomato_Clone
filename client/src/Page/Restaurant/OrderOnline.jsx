import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RiCompass3Line } from "react-icons/ri";
import { MdAccessTime } from "react-icons/md";
 
// components
import FloatMenuBtn from "../../components/restaurant/Order-Online/FloatMenuBtn";
import MenuListContainer from "../../components/restaurant/Order-Online/MenuListContainer";
import FoodList from "../../components/restaurant/Order-Online/FoodList";

// redux actions
import { getFoodList, getFood } from "../../Redux/Reducer/Food/Food.action";
import { addCart } from "../../Redux/Reducer/Cart/Cart.action";


const OrderOnline = (props) => {
  const [menu, setMenu] = useState([]);
  const [selected, setSelected] = useState("");

  const onClickHandler = (e) => {
    if (e.target.id) {
      setSelected(e.target.id);
    }
    return;
  };
  const reduxState = useSelector(
    (globalStore) => globalStore.restaurant.selectedRestaurant.restaurant
  );

  const dispatch = useDispatch();

  useEffect(() => {
    reduxState &&
      dispatch(getFoodList(reduxState.menu)).then((data) =>
        setMenu(data.payload.menus.menus)
      );
  }, [reduxState]);

  return (
    <>
      <div className="w-full h-screen flex">
        <aside className="hidden md:flex mr-3 flex-col gap-3 border-r-2 border-gray-300 overflow-y-scroll h-screen w-1/4">
          {menu.map((item) => (
            <MenuListContainer
              {...item}
              key={item._id}
              onClickHandler={onClickHandler}
              selected={selected}
            />
          ))}
        </aside>
        <div className="w-full  px-3 md:w-3/4">
          <h2 className="text-xl font-semibold">Order Online</h2>
          <h4 className="flex items-center gap-2 font-light text-gray-500">
            <RiCompass3Line /> Live track your order | <MdAccessTime /> 43 min
          </h4>

          <section className="h-screen overflow-y-scroll">
            {menu.map((item) => (
              <FoodList key={item._id} {...item} />
            ))}
          </section>
        </div>
      </div>
      <FloatMenuBtn />
    </>
  );
};

export default OrderOnline;