// Libraries
import express from "express";
import passport from "passport";
import multer from "multer";

// Database modal
import { ImageModel } from "../../database/allModels";

// Utilities
import { s3Upload } from "../../Utils/AWS/s3"

const Router = express.Router();

// multer config
const storage = multer.memoryStorage();
const upload = multer({ storage });

/*
Route     /
Des       Get Image details
Params    id
Access    Public
Method    GET  
*/
Router.get("/:_id", async (req, res) => {
    try {
      const image = await ImageModel.findById(req.params._id);
  
      return res.json({ image });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
});
  
/*
Route     /Image
Des       uploads given image to S3 buckets and saves file link to mongodb
Params    id
Access    Public
Method    GET  
*/
Router.post("/", upload.single("file"), async (req, res) => {
    try {
        const file = req.file;

        // s3 bucket options
        const bucketOptions = {
          Bucket: "shapeai2",
          Key: file.originalname,
          Body: file.buffer,
          ContentType: file.mimetype,
          ACL: "public-read", // Access Control List
        };
        
        const uploadImage = await s3Upload(bucketOptions);
        await ImageModel.create({images: [ { location: uploadImage.Location } ]})

        return res.status(200).json({ uploadImage });
    
    }   catch (error) {
        return res.status(500).json({ error: error.message });
    }

});


export default Router;