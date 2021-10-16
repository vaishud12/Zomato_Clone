import React from "react";

// components
import NutritionHeroCarousal from "./NutritionHeroCarousal";
import NutritionCarousal from "./NutritionCarousal";
import NutritionCard from "./NutritionCard";

const Nutrition = () => {
  return (
    <div>
      <NutritionHeroCarousal />
      <div className="my-6">
        <NutritionCarousal />
      </div>
      <div className="flex justify-between flex-wrap ">
        <NutritionCard
          bg="black"
          image="https://dote.zmtcdn.com/prod/data/admin_assets/images/985/1db983abf8a38bdebb42171b5ea7d985_1614756360.png?output-format=webp"
        />

        <NutritionCard
          bg="red"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI8POEDMXaP3ppBo53wpJtaDfnYMtSQQfDvA&usqp=CAU"
        />

        <NutritionCard
          bg="blue"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQajJPmjQVcNGq4wl7gtKL-fEwCKcm4bsPN3g&usqp=CAU"
        />
        
      </div>
    </div>
  );
};

export default Nutrition;