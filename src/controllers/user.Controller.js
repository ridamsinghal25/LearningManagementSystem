import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.Model.js";

const registerUser = asyncHandler(async (req, res) => {
  // steps for user registration
  // Data collection from user
  // validate - not empty
  // check if user already exists - email
  // check for images
  // upload to cloudinary
  // create user object - entry in db
  // remove password and refresh token field from response
  // check for user creation
  // response

  const { fullName, email, password, phoneNumber } = req.body;

  if (
    [fullName, email, password, phoneNumber].some(
      (field) => field?.trim() === ""
    )
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const userExisted = await User.findOne({ email });

  if (userExisted) {
    throw new ApiError(409, "user with this email already exists");
  }
});

export { registerUser };
