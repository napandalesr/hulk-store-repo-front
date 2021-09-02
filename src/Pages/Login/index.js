import React from 'react';

import LoginForm from '../../Containers/LoginForm';
import { login } from '../../api/module/Login/index';

import './style.scss';

const Login = () => {
  const onFinish = async(data) => {
    const response = await login(data);
    console.log(response);
  };
  return <div className='login'>
    <LoginForm onFinish={onFinish}/>
  </div>;
};

export default Login;