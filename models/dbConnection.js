import mongoose from "mongoose";

const myDB = mongoose.connection.useDb("cavetestdb");

export default myDB;
