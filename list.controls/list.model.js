import mongoose from "mongoose";

const listSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 255,
  },
  description: {
    type: String,
    required: true,
    trim: true,
    maxlength: 5000,
  },
  startingDate: { type: Date, max: Date.now() },
  finishingDate: { type: Date, max: Date.now() },
  userId: {
    type: mongoose.ObjectId,
    reference: "User",
    required: true,
    trim: true,
  },
});

const ListTable = mongoose.model("List", listSchema);

export default ListTable;
/*
    ? title
    ? details
    ? date the list is registered
    ? date the list is to be finished
*/
