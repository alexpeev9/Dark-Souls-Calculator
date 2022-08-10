import { Helmet } from 'react-helmet-async';
import RegisterForm from './RegisterForm';

const RegisterPage = () => {
  return (
    <>
      <Helmet>
        <title>Register</title>
        <meta name='description' content='Join DS Calculator' />
      </Helmet>
      <RegisterForm />
    </>
  );
};

export default RegisterPage;
