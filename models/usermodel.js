import mongoose from "mongoose";

const userschema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  gender: {
    type: String,
  },
  city: {
    type: String,
  },
  profile: {
    type: String,
  },
});

const usermodel = mongoose.model("user", userschema);
export default usermodel;
