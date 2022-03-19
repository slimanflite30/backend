const Teacher = require('../models/teacherModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.createTeacher = catchAsync(async (req, res, next) => {
  const id = (await Teacher.estimatedDocumentCount()) || 0;

  const newTeacher = await Teacher.create({
    ...req.body,
    phone: `${req.body.phone}`,
    id: id
  });
  res.status(200).json({
    status: 'success',
    data: {
      ...newTeacher._doc,
      phone: req.body.phone
    }
  });
});
exports.getTeacher = catchAsync(async (req, res, next) => {
  const teacher = await Teacher.findOne({ id: req.params.id });
  if (!teacher) {
    return next(new AppError('No Student found with ID', 404));
  }
  res.status(200).json({
    status: 'success',
    data: {
      teacher
    }
  });
});
exports.getAllTeacher = catchAsync(async (req, res, next) => {
  const teacher = await Teacher.find();
  res.status(200).json({
    status: 'success',
    results: teacher.length,
    data: {
      teacher
    }
  });
});
exports.updateTeacher = catchAsync(async (req, res, next) => {
  const newTeacher = await Teacher.findOneAndUpdate(
    { id: req.params.id },
    req.body,
    {
      new: true,
      runValidators: true
    }
  );
  if (!newTeacher) {
    return next(new AppError('No Student found with ID', 404));
  }
  res.status(200).json({
    status: 'update success',
    data: {
      newTeacher
    }
  });
});
exports.deleteTeacher = catchAsync(async (req, res, next) => {
  const teacher = await Teacher.deleteOne({ id: req.params.id });
  if (!teacher) {
    return next(new AppError('No Student found with ID', 404));
  }
  res.status(204).json({
    status: 'update success',
    data: {
      teacher
    }
  });
});
