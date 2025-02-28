import express from "express";
import ListTable from "./list.model.js";
import { validateReqBody } from "../middleware/validate.req.body.js";
import { listVerificationSchema } from "./list.verification.js";
import { validateMongoId } from "../middleware/validate.mongo.id.js";
import { isUser } from "../middleware/authentication.middleware.js";

const router = express.Router();

router.post(
  "list/add",
  isUser,
  validateReqBody(listVerificationSchema),
  () => {}
);

router.post(
  "list/edit",
  isUser,
  validateReqBody(listVerificationSchema),
  () => {}
);

router.post("list/delete/:id", isUser, validateMongoId, () => {});

export { router as listController };
