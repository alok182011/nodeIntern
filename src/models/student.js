const { model, Schema } = require("mongoose");

const studentSchema = new Schema({
  name: {
    type: String,
  },
  password: String,
  email: {
    type: String,
    unique: true,
  },
  createdAt: String,
  standard: String,
  rollNo: {
    type: String,
    unique: true,
  },
});

module.exports = model("Student", studentSchema);
