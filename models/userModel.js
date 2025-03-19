import mongoose from "mongoose";
import myDB from "./dbConnection.js";
import bycrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator";

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: "Name is required",
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: "Email address is required",
      validate(value) {
        if (!validator.isEmail(value)) throw new Error("Email is invalid");
      },
    },
    password: {
      type: String,
      trim: true,
      minLength: 7,
      required: true,
      validate(value) {
        if (value.search(/password/i) !== -1)
          throw new Error("The password cannot contain the word 'password'");
      },
    },
  },
  { timestamps: true }
);

const User = myDB.model("User", UserSchema);

export default User;
