import usermodel from "../models/usermodel.js";

class Usercontroller {
  static getalluser = async (req, res) => {
    const getalluserdata = await usermodel.find({}).timeout(30000);
    if (getalluserdata) {
      return res.status(200).json(getalluserdata);
    } else {
      return res.status(200).json({ message: "User not Added plz add first" });
    }
  };
  static adduser = async (req, res) => {
    const { name, email, gender, city } = req.body;
    try {
      if (name && email && gender && city) {
        const isemail = await usermodel.findOne({ email }).timeout(30000);
        if (!isemail) {
          const adduserprofile = usermodel({
            name,
            email,
            city,
            gender,
            profile: req.file.filename,
          });
          const saveuser = await adduserprofile.save();
          if (saveuser) {
            return res.status(200).json({ message: "User Added Successfully" });
          }
        } else {
          return res.status(400).json({ message: "User already exist" });
        }
      } else {
        return res.status(400).json({ message: error.message });
      }
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };
}

export default Usercontroller;
