const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

const JWT_SECRET = 'my-ultra-secure-and-ultra-long-secret';
const JWT_EXPIRES_IN = '90d';

const signToken = id => {
  return jwt.sign({ id }, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN
  });
};
exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create(req.body);
  const token = signToken(newUser._id);
  console.log('here');
  res.status(201).json({
    status: 'success',
    data: {
      newUser,
      token
    }
  });
});
exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  //if check email and password exist
  if (!email || !password) {
    next(new AppError('please privide email and password ', 400));
  }
  const user = await User.findOne({ email }).select('+password');
  const correct = user.correctPassword(password, user.password);
  if (!user || !correct) {
    next(new AppError('Incorrect email or password', 401));
  }
  const token = signToken(user._id);
  res.status(201).json({
    status: 'success',
    data: {
      user,
      token
    }
  });
});
