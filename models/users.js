const mongoose = require("mongoose");
const db = require("../config/keys").MONGOURI;

const dbSchema = new mongoose.Schema({
  name: String,
  email: String,
  contact: Number,
});

const dbModel = mongoose.model("users", dbSchema);

module.exports = {
  dbCheck: mongoose
    .connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .then(() => {
      console.log("DB connected");
    })
    .catch((error) => {
      console.error(error);
    }),
  dbModel: dbModel,
};
