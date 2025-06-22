import mongoose from "mongoose";

async function connectMongoDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("DB successfully created!");
  } catch (err) {
    console.log("DB connection failed", err);
  }
}

export default connectMongoDB;
