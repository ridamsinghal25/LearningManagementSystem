import ApiError from "../utils/error.utils";

const register = (req, res) => {
  const { fullName, email, password } = req.body;

  if (!fullName || !email || !password) {
    new ApiError("All fields are required", 400);
  }
};

const login = (req, res) => {};

const logout = (req, res) => {};

const getProfile = (req, res) => {};

export { register, login, logout, getProfile };
