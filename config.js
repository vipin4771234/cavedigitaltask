import { config } from "dotenv";

config();

export const MONGODB_URI = process.env.MONGODB_URI;
export const CORS_ORIGIN = process.env.CORS_ORIGIN;
export const JWT_SECRET = process.env.JWT_SECRET;
export const CORS_METHODS = ['GET','POST','PUT','DELETE','PATCH']
