import yup from "yup";
import dayjs from "dayjs";

export const listVerificationSchema = yup.object({
  title: yup.string().required().trim().max(155),
  description: yup.string().required().trim().max(555),
  startingDate: yup.date().required().default(dayjs).min(dayjs()),
  finishingDate: yup.date().required(),
  userId: yup.required().trim(),
});
