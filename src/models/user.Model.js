import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: [true, "fullName is required"],
      lowercase: true,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
      minlength: [true, "password should be greater than 8 characters"],
    },
    phoneNumber: {
      type: Number,
      required: [true, "phone number is required"],
    },
    avatar: {
      type: String,
      required: [true, "avatar is required"],
    },
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);

// hashing the password
userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

export const User = mongoose.model("User", userSchema);
