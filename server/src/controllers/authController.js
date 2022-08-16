const authService = require('../services/authService');
const { errorResponse } = require('../utils/errorsHandler');

exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;
    response = await authService.register(username, password);

    res.status(200).json(response);
  } catch (err) {
    const errorMessage = errorResponse(err);
    res.status(500).json(errorMessage);
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    response = await authService.login(username, password);
    const token = response.accessToken;
    res.cookie('JWT', token, {
      httpOnly: true,
      secure: true,
    });

    res.status(200).json(response);
  } catch (err) {
    const errorMessage = errorResponse(err);
    res.status(500).json(errorMessage);
  }
};

exports.logout = async (req, res) => {
  try {
    const cookies = req.cookies;
    // if (!cookies?.JWT) throw new Error('JWT Cookie not found!');

    res.clearCookie('JWT');
    res.status(200).json('Successfully logout');
  } catch (err) {
    const errorMessage = errorResponse(err);
    res.status(500).json(errorMessage);
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const response = await authService.getUsers();
    res.status(200).json(response);
  } catch (err) {
    const errorMessage = errorResponse(err);
    res.status(500).json(errorMessage);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const response = await authService.deleteUser(userId);
    res.status(200).json(response);
  } catch (err) {
    const errorMessage = errorResponse(err);
    res.status(500).json(errorMessage);
  }
};
