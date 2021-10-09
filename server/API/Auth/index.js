import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import passport from "passport";

import { UserModel } from "../../database/user";

// // Database Modals
// import { UserModal } from "../../database/allModels"

// validation
import { ValidateSignup, ValidateSignin } from "../../validation/auth";

const Router = express.Router();



/*
Route   /Signup
Des     Signup with email and password
Params  none
Access  Public
Method  POST
*/

// Router.post("/signup", async (req, res, next) => {
//     try {
//       const { email, password, fullname } = req.body.credentials;
//       await UserModal.userShouldNotExist(email);
//       const user = await UserModal.create({ email, password, fullname });
//       const token = user.generateAuthToken();
//       return res.json({
//         token,
//         user,
//       });
//     } catch (error) {
//       return res.status(500).json({ error: error.message });
//     }
// });
  
Router.post("/signup", async (req, res) => {
    try {
      await ValidateSignup(req.body.credentials);
  
      await UserModel.findByEmailAndPhone(req.body.credentials);
      const newUser = await UserModel.create(req.body.credentials);
      const token = newUser.generateJwtToken();
      return res.status(200).json({ token, status: "success" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
});
  

/*
Route   /Signin
Des     Signin with email and password
Params  none
Access  Public
Method  POST
*/
Router.post("/signin", async (req, res) => {

    try {
        await ValidateSignin(req.body.credentials);
        
        const user = await UserModel.findByEmailAndPassword(req.body.credentials);

        // generate JWT auth token
        const token = user.generateJwtToken();
        
        // return
        return res.status(200).json({ token, status: "success" });
    }   catch (error) {
        return res.status(500).json({ error: error.message });
    }

});

/*
Route     /google
Des       Google Signin
Params    none
Access    Public
Method    GET  
*/
Router.get(
    "/google",
    passport.authenticate("google", {
      scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email",
      ],
    })
);

/*
Route     /google/callback
Des       Google Signin Callback
Params    none
Access    Public
Method    GET  
*/
Router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    return res.redirect(
      `http://localhost:3000/google/${req.session.passport.user.token}`
    );
  }
);


export default Router;

// Statics and Methods in mongoose

// Methods

// Static
