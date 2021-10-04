import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema(
    {
    fullname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String },
    address: [{ detail: { type: String }, for: { type: String } }],
    phoneNumber: [{ type: Number }],
    },
    {
        timestamp: true,
    }
    
);

UserSchema.methods.generateJwtToken = function () {
    return jwt.sign({ user: this._id.toString() }, "zomatoAPP");
};

UserSchema.statics.findByEmailAndPhone = async ({ email,phoneNumber }) => {
    // check wweather email exist
        
    const checkUserByEmail = await UserModel.findOne({ email });
    const checkUserByPhone = await UserModel.findOne({ phoneNumber });

    if (checkUserByEmail || checkUserByPhone) {
        throw new Error("User Already Exist...");
    }
    
    return false;
};

UserSchema.statics.findByEmailAndPassword = async ({ email, password }) => {
    // check weather email exist
    const user = await UserModel.findOne({ email });
    if (!user) throw new Error("User does no exist!!!");

    // compare password
    const doesPasswordMatch = await bcrypt.compare(password, user.password);
    
    if (!doesPasswordMatch) throw new Error("invalid Password!!!")
    
    return user;
};

UserSchema.pre("save", function (next) {
    const user = this;
    
    // password is modified
    if (!user.isModified("password")) return next();

    // generate bcrypt salt
    bcrypt.genSalt(8, (error, salt) => {
        if(error) return next(error);

        // hash the password
        bcrypt.hash(user.password, salt, (error, hash) => {
            if (error) return next(error);

            // assigning the hashed password
            user.password = hash;
            return next();
        });
    });
});

export const UserModel = mongoose.model("Users", UserSchema);
