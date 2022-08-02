import { IRequest, IResponse } from '../middlewares/interface';
import authService from '../services/authService';
import errorHandler from '../utils/errorHandler';

const register = async (req: IRequest, res: IResponse) => {
  try {
    const { username, password } = req.body;
    const response = await authService.register(username, password);
    res.status(200).json(response);
  } catch (err) {
    const errorMessage = errorHandler(err);
    res.status(500).json(errorMessage);
  }
};

const login = async (req: IRequest, res: IResponse) => {
  try {
    const { username, password } = req.body;
    const response = await authService.login(username, password);
    const token = response.accessToken;

    res.cookie('JWT', token, {
      httpOnly: true,
      secure: true,
    });

    res.status(200).json(response);
  } catch (err) {
    const errorMessage = errorHandler(err);
    res.status(500).json(errorMessage);
  }
};

const logout = async (req: IRequest, res: IResponse) => {
  try {
    const cookies = req.cookies;

    res.clearCookie('JWT');
    res.status(200).json('Successfully logout');
  } catch (err) {
    const errorMessage = errorHandler(err);
    res.status(500).json(errorMessage);
  }
};

const getAllUsers = async (req: IRequest, res: IResponse) => {
  try {
    const response = await authService.getUsers();
    res.status(200).json(response);
  } catch (err) {
    const errorMessage = errorHandler(err);
    res.status(500).json(errorMessage);
  }
};

const deleteUser = async (req: IRequest, res: IResponse) => {
  try {
    const userId = req.params.id;
    const currUserName = req.body.requestSender?.username;
    const response = await authService.deleteUser(userId, currUserName);
    res.status(200).json(response);
  } catch (err) {
    const errorMessage = errorHandler(err);
    res.status(500).json(errorMessage);
  }
};

export default { register, login, logout, getAllUsers, deleteUser };
