//Libraries
import express from "express";
import passport from "passport";

//database modal
import {RestaurantModel} from "../../database/allModels";

//validation
import { ValidateRestaurantCity, ValidateRestaurantSearchString } from "../../validation/restaurant";
import { ValidateRestaurantId } from "../../validation/food";

const Router = express.Router();

/* 
Route - /
Descript - get all the restaurant details based on city
Params - None
Access - Public
Method - GET
*/

Router.get("/", async (req, res) => {
    try {
        await ValidateRestaurantCity(req.query);

        const {city} = req.query;
        const restaurants = await RestaurantModel.find({city});
        return res.json({restaurants});
    
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});
// @Route   POST /restaurants/new
// @des     add new restaurant
// @access  PRIVATE
Router.post("/new", passport.authenticate("jwt"), async (req, res) => {
    try {
      const newRetaurant = await RestaurantModel.create(req.body.restaurantData);
      return res.json({ restaurants: newRetaurant });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });
  
  // @Route   PATCH /restaurants/update
  // @des     update exisitng restaurant data
  // @access  PRIVATE
  Router.patch("/update", passport.authenticate("jwt"), async (req, res) => {
    try {
      const updatedRestaurant = await RestaurantModel.findByIdAndUpdate(
        req.body.restaurantData._id,
        { $set: req.body.restaurantData },
        { new: true }
      );
      if (!updatedRestaurant)
        return res.status(404).json({ restaurants: "Restaurant Not Found!!!" });
  
      return res.json({ restaurants: updatedRestaurant });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });
  
  // @Route   DELETE /restaurants/delete
  // @des     update exisitng restaurant data
  // @access  PRIVATE
  Router.delete("/delete", passport.authenticate("jwt"), async (req, res) => {
    try {
      const deleteRestaurant = await RestaurantModel.findByIdAndRemove(
        req.body.retaurantData._id
      );
      return res.json({ restaurants: Boolean(deleteRestaurant) });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });

/* 
Route - /
Descript - get individual restaurant details based on id
Params - id
Access - Public
Method - GET
*/

Router.get("/:_id",  async (req, res) => {
    try { 
        await ValidateRestaurantId(req.params);

        const {_id} = req.params;
        const restaurant = await RestaurantModel.findById(_id);
        
        if(!restaurant) return res.status(404).json({
            error: "Restaurant Not Found" 
        });

        //but if the restaurant exists
        return res.json({restaurant});
    
    } catch (error) {
        return res.status(500).json({error: error.message});        
    }
});

/* 
Route - /search
Descript - get restaurant details based on search strings
Params - none
Body - searchString
Access - Public
Method - GET
*/

Router.get("/search", async (req, res) => {
    try {
        await ValidateRestaurantSearchString(req.body);

        const {searchString} = req.body; 
        const restaurants = await RestaurantModel.find({
            name : { $regex : searchString, $options : "i" },
        });
        
        if(!restaurants) return res.status(404).json({
            error: `No Restaurant Matched With ${searchString}`
        });

        //but if the restaurant exists
        return res.json({restaurants});
    
    } catch (error) {
        return res.status(500).json({error: error.message});        
    }
});

export default Router;



// // Libraries
// import express from "express";
// import passport from "passport";

// // Database modal
// import { RestaurantModel } from "../../database/allModels";

// // validation
// import {
//     ValidateRestaurantCity,
//     ValidateRestaurantSearchString,
//   } from "../../validation/restaurant";
// import { ValidateRestaurantId } from "../../validation/food";
  

// const Router = express.Router();
// /*
// Route   /
// Des     Get all the restaurant details based in city
// Params  none
// Access  Public
// Method  GET
// */
// Router.get("/", async (req, res) => {
//     try {
//         await ValidateRestaurantCity(req.query);
//         const { city } = req.query;
//         const restaurants = await RestaurantModel.find({ city });

//         return res.json({ Restaurants });
//     }   catch (error) {
//         return res.status(500).json({ error: error.message });
//     }

// });

// // @Route   POST /restaurants/new
// // @des     add new restaurant
// // @access  PRIVATE
// Router.post("/new", passport.authenticate("jwt"), async (req, res) => {
//     try {
//       const newRetaurant = await RestaurantModal.create(req.body.retaurantData);
//       return res.json({ restaurants: newRetaurant });
//     } catch (error) {
//       return res.status(500).json({ error: error.message });
//     }
//  });
  
//   // @Route   PATCH /restaurants/update
//   // @des     update exisitng restaurant data
//   // @access  PRIVATE
//   Router.patch("/update", passport.authenticate("jwt"), async (req, res) => {
//     try {
//       const updatedRestaurant = await RestaurantModel.findByIdAndUpdate(
//         req.body.restaurantData._id,
//         { $set: req.body.restaurantData },
//         { new: true }
//       );
//       if (!updatedRestaurant)
//         return res.status(404).json({ restaurants: "Restaurant Not Found!!!" });
  
//       return res.json({ restaurants: updatedRestaurant });
//     } catch (error) {
//       return res.status(500).json({ error: error.message });
//     }
//   });

//   // @Route   DELETE /restaurants/delete
//   // @des     update exisitng restaurant data
//   // @access  PRIVATE
//   Router.delete("/delete", passport.authenticate("jwt"), async (req, res) => {
//     try {
//       const deleteRestaurant = await RestaurantModel.findByIdAndRemove(
//         req.body.retaurantData._id
//       );
//       return res.json({ restaurants: Boolean(deleteRestaurant) });
//     } catch (error) {
//       return res.status(500).json({ error: error.message });
//     }
//   });


// /*
// Route   /
// Des     Get individual restaurant details based on id
// Params  id
// Access  Public
// Method  GET
// */
// Router.get("/:id", async (req, res) => {
//     try  {
//         await ValidateRestaurantId(req.params);
//         const { _id } = req.params;
//         const restaurant = await RestaurantModel.findOne(_id);
//         if (!restaurant)
//           return res.status(404).json({ error: "Restaurant Not Found" });
        
//         return res.json({ restaurant });
//     }   catch (error) {
//         return res.status(500).json({ error: error.message });
//     }
// });

// /*
// Route   /search
// Des     Get individual restaurant details based on search string
// Params  none
// Body    searchString
// Access  Public
// Method  GET
// */
// Router.get("/search",async (req, res) => {
//     try {
//         await ValidateRestaurantSearchString(req.body);

//         const { searchString } = req.body;
//         const restaurants = await RestaurantModel.find({
//             name: { $regex: searchString, $options: "i" },
//         });

//         if (!restaurants)
//           return res
//             .status(404)
//             .json({ error: `No Restaurant matched with ${searchString}` });

//         return res.json({ restaurants });
//     }   catch (error) {
//         return res.status(500).json({ error: error.message });
//     }
// });

// export default Router;

// // /*A-Z*/($regex-match this pattern tell to compiler)