const Students = require('../models/studentModel');

exports.createStudent = async (req, res) => {
  //   const newStudent = new Students(req.body);
  //   newStudent.save();
  console.log('here');

  const id = await Students.estimatedDocumentCount();
  console.log(id);
  try {
    const newStudent = await Students.create({
      ...req.body,
      id: id
    });
    res.status(200).json({
      status: 'success',
      data: {
        newStudent
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};
exports.getStudent = async (req, res) => {
  try {
    const student = await Students.findOne({ id: req.params.id });
    res.status(200).json({
      status: 'success',
      data: {
        student
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
  //   console.log(req.params);
  //   const id = req.params.id * 1;
  //   const tour = tours.find(el => el.id === id);
  //   res.status(200).json({
  //     status: 'success',
  //     data: {
  //       tour
  //     }
  //   });
};
exports.getAllStudent = async (req, res) => {
  try {
    const students = await Students.find();
    res.status(200).json({
      status: 'success',
      data: {
        students
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};

exports.updateStudent = async (req, res) => {
  try {
    const newStudent = await Students.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      {
        new: true,
        runValidators: true
      }
    );
    res.status(200).json({
      status: 'update success',
      data: {
        newStudent
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    const newStudent = await Students.deleteOne({ id: req.params.id });
    res.status(204).json({
      status: 'update success',
      data: {
        newStudent
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};
