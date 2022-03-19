const Courses = require('../models/couserModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.createCourse = catchAsync(async (req, res, next) => {
  const id = (await Courses.estimatedDocumentCount()) || 0;

  const newCourses = await Courses.create({
    ...req.body,
    id: id
  });
  res.status(200).json({
    status: 'success',
    data: {
      ...newCourses._doc
    }
  });
});
exports.getCourse = catchAsync(async (req, res, next) => {
  const courses = await Courses.findOne({ id: req.params.id });
  if (!courses) {
    return next(new AppError('No courses found with ID', 404));
  }
  res.status(200).json({
    status: 'success',
    data: {
      courses
    }
  });
});
exports.getAllCourses = catchAsync(async (req, res, next) => {
  const courses = await Courses.find();
  res.status(200).json({
    status: 'success',
    results: courses.length,
    data: {
      courses
    }
  });
});
exports.updateCourse = catchAsync(async (req, res, next) => {
  const newCourse = await Courses.findOneAndUpdate(
    { id: req.params.id },
    req.body,
    {
      new: true,
      runValidators: true
    }
  );
  if (!newCourse) {
    return next(new AppError('No Course found with ID', 404));
  }
  res.status(200).json({
    status: 'update success',
    data: {
      newCourse
    }
  });
});
exports.deleteCourse = catchAsync(async (req, res, next) => {
  const course = await Courses.deleteOne({ id: req.params.id });
  if (!course) {
    return next(new AppError('No Course found with ID', 404));
  }
  res.status(204).json({
    status: 'update success',
    data: {
      course
    }
  });
});
