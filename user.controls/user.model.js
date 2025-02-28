import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    maxlength: 255,
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 255,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 255,
  },

  dob: {
    type: Date,
    max: Date.now(),
  },
  address: {
    type: String,
    required: true,
    trim: true,
    maxlength: 255,
  },
  gender: {
    type: String,
    required: true,
    trim: true,
    enum: ["male", "female", "others"],
  },
});

const UserTable = mongoose.model("User", userSchema);

export default UserTable;
