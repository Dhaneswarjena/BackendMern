import express from "express";
import Usercontroller from "../controller/usercontrol.js";
import multer from "multer";
const route = express.Router();

//file methods
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage: storage });
//api routes

route.get("/users", Usercontroller.getalluser);
route.post("/users", upload.single("profile"), Usercontroller.adduser);

export default route;
