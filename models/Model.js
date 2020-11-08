const { ObjectID } = require("mongodb");
const mongoose = require("mongoose");

const someSchema = new mongoose.Schema({
  name: String,
  rollno: String,
  batch: String,
  classesAttended: [
    {
      _id: ObjectID,
      present: Boolean,
    },
  ],
});

module.exports = mongoose.model("collection_name", someSchema);
