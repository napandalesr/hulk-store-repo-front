import React from 'react';
import { notification, Spin } from 'antd';

import LoginForm from '../../Containers/LoginForm';
import { login } from '../../api/module/Login/index';
import { setUserSession } from '../../utils/Helpers/helpers';

import './style.scss';

const Login = () => {
  const [loading, setLoading] = React.useState(false);

  const onFinish = async(data) => {
    setLoading(true);
    try {
      const response = await login(data);
      if ([200, 201, 203, 204].indexOf(response.status) > -1){
        setUserSession(response.data);
        notification.success({
          message: "Bienvenido",
          duration: 5,
        });
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return <Spin spinning={loading}>
    <div className='login'>
      <LoginForm onFinish={onFinish}/>
    </div>
  </Spin>;
};

export default Login;