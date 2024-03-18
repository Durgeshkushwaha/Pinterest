const mongoosse = require("mongoose")
const plm = require("passport-local-mongoose");

mongoosse.connect("mongodb://127.0.0.1:27017/pinterestdb")

const userschema = mongoosse.Schema({
  username: String,
  name: String,
  email: String,
  password: String,
  profileImage: String,
  contact: Number,
  boards: {
    type: Array,
    default: []
  },
  posts: [
    {
      type: mongoosse.Schema.Types.ObjectId,
      ref: "post"
    }
  ]
})

userschema.plugin(plm);

module.exports = mongoosse.model("user", userschema);