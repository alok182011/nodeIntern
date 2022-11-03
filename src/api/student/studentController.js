const Student = require("../../models/student");

const createStudent = async (req, res, next) => {
  try {
    const { name, password, email, standard, rollNo } = req.body;
    const newStudent = {
      name,
      password,
      email,
      standard,
      rollNo,
      createdAt: new Date().toISOString(),
    };

    const student = await Student.create(newStudent);

    return res.status(200).json(student);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

const getStudent = async (req, res, next) => {
  try {
    const { rollNo } = req.query;

    const student = await Student.findOne({ rollNo });

    return res.status(200).json(student);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

module.exports = { createStudent, getStudent };
