import yup from "yup";
import dayjs from "dayjs";

export const loginCredentialsSchema = yup.object({
  email: yup.string().required().email().trim().lowercase(),
  password: yup.string().required().trim(),
});

export const registerCredentialsSchema = yup.object({
  email: yup.string().required().email().trim().max(255),
  password: yup.string().required().trim().max(30),
  firstName: yup.string().required().trim().max(30),
  lastName: yup.string().required().trim().max(30),
  dob: yup.date().max(dayjs()).notRequired(),
  address: yup.string().required().trim(),
  gender: yup.string().required().trim().oneOf(["male", "female", "other"]),
});
