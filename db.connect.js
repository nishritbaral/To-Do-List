import mongoose from "mongoose";

const dbName = "to-do-list";
const dbUserName = "nishrit";
const dbPassword = encodeURIComponent("Nishrit5");
const dbHosts = "school.t7rsx.mongodb.net";
const dbOptions = "retryWrites=true&w=majority&appName=School";

const connectDB = async () => {
  try {
    const URL = `mongodb+srv://${dbUserName}:${dbPassword}@${dbHosts}/${dbName}?${dbOptions}`;
    await mongoose.connect(URL);

    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("Database connection failed");
    console.log(error.message);

    process.exit(1);
  }
};

export default connectDB;
