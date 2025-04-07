import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const configs = {
    APP_NAME: process.env['APP_NAME'] ?? "",
    DB: {
        URI: process.env['DB_URI'] ?? "mongodb://localhost:27017/ecom",
        DB_NAME: process.env['DB_NAME'] ?? "ecom",
        mongosOptions: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as mongoose.ConnectOptions
    },
}

export default configs;