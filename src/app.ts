import express from "express";
import authRoutes from "./routes/auth"; 
import cors from "cors";
import mongoose from "mongoose";
import configs from "./configs";

const app = express();

app.use(cors());
app.use("/api/v1", authRoutes);

const connectToDatabase = async () => {
    try {
        await mongoose.connect(configs.DB.URI, configs.DB.mongosOptions);
        console.log("Connected to MongoDB. SUCCESS........");
    } catch (error) {
        console.error("Connected to MongoDB FAILED........", error);
        process.exit(1);
    }
};

// Call the function to connect to the database
(async () => {
    await connectToDatabase();
})();

export default app;