import express from "express";
import cors from "cors";
import helmet from "helmet";

const zomato = express();

// application middlewaares
zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false }));
zomato.use(helmet());
zomato.use(cors());

zomato.get("/" , (req, res) => res.json({ message: "setup success" }));

zomato.listen(5000, () => console.log("server is running 🚀"));
