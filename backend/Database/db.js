import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MongoDBURI);
    console.log("connect");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
