import jwt from "jsonwebtoken";
import UserTable from "../user.controls/user.model";

export const isUser = async (req, res, next) => {
  const token = req.header.authorization?.split("")[1];

  if (!token) {
    return res.status(400).send({ message: "Unauthorized" });
  }
  let payLoad = null;

  try {
    const secretKey = "";

    payLoad = jwt.verify(token, secretKey);
  } catch (error) {
    return res.status(400).send({ message: "Unauthorized." });
  }

  const user = await UserTable.findOne({ email: payLoad.email });

  if (!user) {
    return res.status(400).send({ message: "Unauthorized." });
  }

  req.loggedInUserId = user._id;

  next();
};
