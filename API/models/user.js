const mongoose= require('mongoose')
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    // country: {
    //   type: String,
    //   required: true,
    // },
    // img: {
    //   type: String,
    // },
    // city: {
    //   type: String,
    //   required: true,
    // },
    // phone: {
    //   type: String,
    //   required: true,
    // },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }//to show the time at which created and updated
);



module.exports=mongoose.model("User", UserSchema);