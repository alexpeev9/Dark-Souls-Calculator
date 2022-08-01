interface IUser {
  username: string;
  password: string;
  isAdmin: boolean;
  findByUsername(username: string): IUser;
  comparePassword(password: string): Promise<boolean>;
}

export default IUser;
