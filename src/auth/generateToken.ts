import { Auth } from "./auth.interface";

var jwt = require("jsonwebtoken");

export  const generateToken = (user:Auth) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
    },
    process.env.JWT_SECRET || "somethingsecret",
    {
      expiresIn: "30d",
    }
  );
};

