const userModel = require("../models/users").dbModel;

module.exports = {
  getData: function getData(req, res) {
    console.log("I am in the Get Method");

    userModel.find({}, (err, list) => {
      if (err) {
        console.log(err);
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({ message: "Data Retrieved", data: list });
      }
    });
  },

  postData: function postData(req, res) {
    console.log("I am in the POST Method");

    let userData = new userModel();
    userData.name = req.body.name;
    userData.email = req.body.email;
    userData.number = Number(req.body.contact);
    userData.save();

    res.status(201).json({ message: "Data Created Successfully." });
  },

  putData: function putData(req, res) {
    console.log("I am in the PUT Method");

    const id = req.query.id;

    const name = req.body.name;
    const email = req.body.email;
    const contact = Number(req.body.contact);

    userModel
      .findByIdAndUpdate(id, {
        name: name,
        email: email,
        contact: contact,
      })
      .then(() => {
        res.status(202).json({ message: "Message Updated" });
      })
      .catch((error) => {
        console.log(error);
      });
  },

  deleteData: function deleteData(req, res) {
    console.log("I am in the DELETE Method");

    const id = req.params.id;

    userModel
      .findByIdAndDelete(id)
      .then(() => {
        res.status(200).json({ message: "Data Deleted" });
      })
      .catch((error) => {
        res.send(error);
      });
  },
};
