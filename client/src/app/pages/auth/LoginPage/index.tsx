import { Helmet } from 'react-helmet-async';
import LoginForm from './LoginForm';

const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta name='description' content='Login Page for DS Calculator' />
      </Helmet>
      <LoginForm />
    </>
  );
};

export default LoginPage;
