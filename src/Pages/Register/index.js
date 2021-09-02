import React from 'react';
import { notification, Spin } from 'antd';
import { useHistory } from "react-router-dom";

import { post } from '../../api/module/Users';
import RegisterForm from '../../Containers/RegisterForm';

const Register = () => {
  const [loading, setLoading] = React.useState(false);

  let history = useHistory();

  const onFinish = async(data) => {
    setLoading(true);
    try {
      const response = await post(data);
      if ([200, 201, 203, 204].indexOf(response.status) > -1){
        notification.success({
          message: "Usuario registrado exitosamente",
          duration: 5,
        });
        history.push('/');
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  
  return <Spin spinning={loading}>
    <div className='login'>
      <RegisterForm onFinish={onFinish}/>
    </div>
  </Spin>;
};

export default Register;