import UserModel from '../models/user_model.js';
import ErrorResponse from '../utils/errorResponse.js';

const register = async (req, res, next) => {
  // res.send('register route');
  const { username, email, password } = req.body;
  try {
    const user = await UserModel.create({
      email,
      username,
      password,
    });
    sendToken(user, 201, res);
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  // res.send('login route');
  const { email, password } = req.body;

  // Check if email and password is provided
  if (!email || !password) {
    return next(new ErrorResponse('Please provide an email and password', 400));
  }

  try {
    // Check that user exists by email
    const user = await UserModel.findOne({ email }).select('+password');

    if (!user) {
      return next(new ErrorResponse('Invalid credentials', 401));
    }

    // Check that password match
    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return next(new ErrorResponse('Invalid credentials', 401));
    }

    sendToken(user, 200, res);

    var userData = {
      _id: user._id,
      email: user.email,
      token: generateToken(user),
    };
    console.log(user);

    res.json(userData);
  } catch (err) {
    res.status(500).json({ sucess: false, error: error.message });
  }
};

const sendToken = (user, statusCode, res) => {
  const token = user.getSignedJwtToken();
  res.status(statusCode).json({ sucess: true, token });
};

const generateToken = (user) => {
  return user.getSignedJwtToken();
};

export default {
  register,
  login,
  sendToken,
};
