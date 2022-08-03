interface IUser {
  username: string;
  password: string;
  isAdmin: boolean;

  comparePasswords(
    candidatePassword: string,
    dbPassword: string
  ): Promise<boolean>;
}

export default IUser;
