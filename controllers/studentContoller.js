const Students = require('../models/studentModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.createStudent = catchAsync(async (req, res, next) => {
  const id = (await Students.estimatedDocumentCount()) || 0;

  const newStudent = await Students.create({
    ...req.body,
    phone: `${req.body.phone}`,
    id: id
  });
  res.status(200).json({
    status: 'success',
    data: {
      ...newStudent._doc,
      phone: req.body.phone
    }
  });
});
exports.getStudent = catchAsync(async (req, res, next) => {
  const student = await Students.findOne({ id: req.params.id });
  if (!student) {
    return next(new AppError('No Student found with ID', 404));
  }
  res.status(200).json({
    status: 'success',
    data: {
      student
    }
  });
});
exports.getAllStudent = catchAsync(async (req, res, next) => {
  const students = await Students.find();
  res.status(200).json({
    status: 'success',
    results: students.length,
    data: {
      students
    }
  });
});
exports.updateStudent = catchAsync(async (req, res, next) => {
  const newStudent = await Students.findOneAndUpdate(
    { id: req.params.id },
    req.body,
    {
      new: true,
      runValidators: true
    }
  );
  if (!newStudent) {
    return next(new AppError('No Student found with ID', 404));
  }
  res.status(200).json({
    status: 'update success',
    data: {
      newStudent
    }
  });
});
exports.deleteStudent = catchAsync(async (req, res, next) => {
  const student = await Students.deleteOne({ id: req.params.id });
  if (!student) {
    return next(new AppError('No Student found with ID', 404));
  }
  res.status(204).json({
    status: 'update success',
    data: {
      student
    }
  });
});
