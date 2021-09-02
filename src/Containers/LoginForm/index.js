import React from 'react';
import { Form, Input, Checkbox, Row, Col, Divider } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from "prop-types";

import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';

import './style.scss';
import CustomButton from '../Components/CustomButtom';
import { Link } from 'react-router-dom';
import { _ROUTES } from '../../utils/constants';

const LoginForm = ({onFinish}) => {
  return <div className='loginForm'>
    <Divider><h2>Login</h2></Divider>
    <Form
      name="basic"
      labelCol={{ span: 7 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        label="Usuario"
        name="username"
        rules={[{ required: true, message: 'Por favor ingrese su nombre de usuario!' }]}
      >
        <Input addonBefore={<FontAwesomeIcon className='icon' icon={faUser}/>} className='inputLogin'/>
      </Form.Item>

      <Form.Item
        label="Contraseña"
        name="password"
        rules={[{ required: true, message: 'Por favor ingrese su contraseña!' }]}
      >
        <Input.Password addonBefore={<FontAwesomeIcon className='icon' icon={faKey}/>} className='inputLogin'/>
      </Form.Item>
      <Row>
        <Col span={12} offset={1}>
        <Form.Item name="remember" valuePropName="checked">
        <Checkbox>Recuérdame</Checkbox>
      </Form.Item>
        </Col>
        <Col span={8} offset={3}>
        <Form.Item name="remember" valuePropName="checked">
          <Link to={_ROUTES.register} >Registrarme</Link>
        </Form.Item>
        </Col>
      </Row>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <CustomButton type="primary" htmlType="submit" text='Iniciar sesión' className='loginButton'/>
      </Form.Item>
    </Form>
  </div>;
};

LoginForm.propTypes = {
  onFinish: PropTypes.func,
};

export default LoginForm;