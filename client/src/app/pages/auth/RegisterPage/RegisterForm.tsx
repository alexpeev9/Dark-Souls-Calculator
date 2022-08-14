import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';

import {
  useLoginMutation,
  useRegisterMutation,
} from '../../../../store/api/authEndpoints';
import {
  selectCurrentUsername,
  setCredentials,
} from '../../../../store/slices/authSlice';
import Form from '../../../components/elements/Form';
import Button from '../../../components/elements/Button';
import Input from '../../../components/elements/Form/Input';
import {
  AttackTypeIcon,
  DurabilityIcon,
} from '../../../../assets/images/icons/stats';
import Link from '../../../components/elements/Link';
import H2 from '../../../components/elements/H2';
import ErrorMsg from '../../../components/ErrorMsg';
import Loading from '../../../components/Loading';
import errorHandler from '../../../utils/errorHandler';
import InputField from '../LoginPage/InputField';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const isLogged = useSelector(selectCurrentUsername);

  const [errMsg, setErrMsg] = useState('');
  const navigate = useNavigate();

  const [register, { isLoading: isLoadingRegister }] = useRegisterMutation();

  const [login, { isLoading: isLoadingLogin }] = useLoginMutation();

  const dispatch = useDispatch();

  useEffect(() => {
    setErrMsg('');
  }, [username, password, rePassword]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      if (password !== rePassword)
        throw new TypeError(`Passwords don't match!`);
      await register({ username, password }).unwrap();
      const userData = await login({ username, password }).unwrap();
      dispatch(setCredentials({ ...(userData as any) }));
      navigate('/about');
    } catch (err: any) {
      setErrMsg(errorHandler(err));
    }
  };

  const handleUserInput = (e: any) => setUsername(e.target.value);

  const handlePwdInput = (e: any) => setPassword(e.target.value);

  const handleRePwdInput = (e: any) => setRePassword(e.target.value);
  return (
    <RegisterWrapper>
      {!isLogged ? (
        <Form onSubmit={handleSubmit}>
          <H2>REGISTER:</H2>

          <InputField
            name='Username'
            value={username}
            type='text'
            onInputChange={handleUserInput}
            Icon={AttackTypeIcon}
          />

          <InputField
            name='Password'
            value={password}
            type='password'
            onInputChange={handlePwdInput}
            Icon={DurabilityIcon}
          />

          <InputField
            name='Re-Password'
            value={rePassword}
            type='password'
            onInputChange={handleRePwdInput}
            Icon={DurabilityIcon}
          />

          {errMsg ? <ErrorMsg>{errMsg}</ErrorMsg> : <></>}
          {isLoadingRegister || isLoadingLogin ? (
            <Loading>...Loading</Loading>
          ) : (
            <>
              <Button type='submit'>Register</Button>
              <Link to='/login'>Sign in</Link>
            </>
          )}
        </Form>
      ) : (
        <></>
      )}
    </RegisterWrapper>
  );
};

export default RegisterForm;

const RegisterWrapper = styled.section`
  width: min-content;
  background-color: ${(p) => p.theme.primary};
  opacity: 90%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 1000px) {
    width: 100%;
    height: max-content;
    align-items: normal;
  }

  ${H2} {
    color: ${(p) => p.theme.primary};
  }

  ${Form} {
    border-radius: 1rem;
    margin: 0 0.9rem;
    @media only screen and (max-width: 1000px) {
      width: min-content;
      display: flex;
      flex-direction: column;
    }
  }

  ${Button} {
    margin: 0.4rem 0 0.8rem 0;
    padding: 0.4rem 0.8rem;
  }

  ${Link} {
    padding: 0.4rem 0.8rem;
  }

  ${Input} {
    text-align: left;
    padding-left: 0.5rem;
  }
`;
