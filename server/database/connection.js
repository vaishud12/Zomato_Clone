import mongoose from "mongoose";

export default async () => {
    return mongoose.connect(process.env.Mongo_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
        // useFindAndModify: false,
    });
};