import IUser from '../interfaces/entities/IUser';
import authService from '../services/authService';
import errorHandler from '../utils/errorHandler';

const register = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { username, password } = req.body;
    const response: string = await authService.register(username, password);
    return res.status(200).json(response);
  } catch (err) {
    const errorMessage = errorHandler(err);
    return res.status(500).json(errorMessage);
  }
};

const login = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { username, password } = req.body;
    const response = await authService.login(username, password);
    const token = response.accessToken;

    res.cookie('JWT', token, {
      httpOnly: true,
      secure: true,
    });

    return res.status(200).json(response);
  } catch (err) {
    const errorMessage = errorHandler(err);
    return res.status(500).json(errorMessage);
  }
};

const logout = async (req: Request, res: Response): Promise<Response> => {
  try {
    res.clearCookie('JWT');
    return res.status(200).json('Successfully logout');
  } catch (err) {
    const errorMessage = errorHandler(err);
    return res.status(500).json(errorMessage);
  }
};

const getAllUsers = async (req: Request, res: Response): Promise<Response> => {
  try {
    const response: IUser[] = await authService.getUsers();
    return res.status(200).json(response);
  } catch (err) {
    const errorMessage = errorHandler(err);
    return res.status(500).json(errorMessage);
  }
};

const deleteUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const userId = req.params.id;
    const currUserName = req.body.requestSender?.username;
    const response: string = await authService.deleteUser(userId, currUserName);
    return res.status(200).json(response);
  } catch (err) {
    const errorMessage = errorHandler(err);
    return res.status(500).json(errorMessage);
  }
};

export default { register, login, logout, getAllUsers, deleteUser };
