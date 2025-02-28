import express from "express";
import connectDB from "./db.connect.js";
import { userController } from "./user.controls/user.controls.js";
import { listController } from "./list.controls/list.controls.js";

const app = express();

app.use(express.json());

await connectDB();

// const d = new Date();
// const year = d.getFullYear();
// const month = d.getMonth();
// const day = d.getDay();
// console.log(`${year}-${month}-${day}`);

// ? var date = new Date();
// ? console.log(date);

// ? var newDate = new Date(new Date(date).setMonth(date.getMonth() + 8));
// ? console.log(newDate);

app.use(userController);
app.use(listController);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
