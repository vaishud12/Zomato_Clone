import React, { useState } from "react";

// components
import MenuCategory from "./MenuCategory";

const MenuListContainer = (props) => {
  console.log(props)
      return (
          <>
              <div className="w-full flex flex-col gap-3">
                  <MenuCategory 
                      name={props.name}
                      onClickHandler={props.onClickHandler}
                      isActive={props.selected === props.name } 
                      length={props.items.length}
                  />
              </div>   
          </>
      )
  }
  
  export default MenuListContainer;