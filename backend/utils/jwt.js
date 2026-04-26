import jwt from "jsonwebtoken";

const SECRET = "super_secret_key_change_me";

export const generateToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      tenantId: user.tenantId,
      role: user.role
    },
    SECRET,
    { expiresIn: "7d" }
  );
};

export const verifyToken = (token) => {
  return jwt.verify(token, SECRET);
};