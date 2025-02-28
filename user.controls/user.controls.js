import express from "express";
import UserTable from "./user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { validateReqBody } from "../middleware/validate.req.body.js";
import {
  loginCredentialsSchema,
  registerCredentialsSchema,
} from "./user.verification.js";

const router = express.Router();

router.post(
  "/user/register",
  validateReqBody(registerCredentialsSchema),
  async (req, res) => {
    newUser = req.body;

    const user = await UserTable.findOne({ email: newUser.email });

    if (user) {
      return res.status(400).send({ message: "User already exists" });
    }

    const plainPassword = newUser.password;
    const saltRounds = 10;

    const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);

    newUser.password = hashedPassword;

    await UserTable.createOne(newUser);

    return res.status(400).send({ message: "User Registered Successfully" });
  }
);

router.post(
  "/user/login",
  validateReqBody(loginCredentialsSchema),
  async (req, res) => {
    const loginCredentials = req.body;

    const user = await UserTable.findOne({ email: loginCredentials.email });

    if (!user) {
      return res.status(400).send({ message: "Invalid Credentials" });
    }

    const plainPassword = loginCredentials.password;
    const hashedPassword = user.password;
    const isPasswordCorrect = await bcrypt.compare(
      plainPassword,
      hashedPassword
    );
    if (!isPasswordCorrect) {
      return res.status(400).send({ message: "Incorrect Password" });
    }

    const payLoad = { email: user.email };
    const secretKey = "aierbvalwddymfdseamfyutdhrsgvd";

    const token = jwt.sign(payLoad, secretKey, { expiresIn: "7D" });

    user.password = undefined;

    return res.status(200).send({
      message: "Logged in Successfully",
      accessToken: token,
      userDetails: user,
    });
  }
);

export { router as userController };
