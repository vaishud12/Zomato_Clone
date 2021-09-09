import React, { useState } from "react";

// components
import MenuCategory from "./MenuCategory";

const MenuListContainer = (props) => {
  return (
    <>
      <div className="w-full flex flex-col gap-3">
        <MenuCategory
          name="Recommended"
          items={["", ""]}
          onClickHandler={props.onClickHandler}
          isActive={selected === "Recommended"}
        />
      </div>
    </>
  );
};

export default MenuListContainer;
