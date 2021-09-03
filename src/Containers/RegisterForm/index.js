import React from 'react';
import { Form, Input, Divider } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from "prop-types";

import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';

import './style.scss';
import CustomButton from '../../Components/CustomButtom';
import { Link } from 'react-router-dom';
import { _ROUTES } from '../../utils/constants';

const RegiterForm = ({onFinish}) => {
  return <div className='loginForm'>
    <Divider><h2>Registro</h2></Divider>
    <Form
      name="basic"
      labelCol={{ span: 7 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        label="Nombre"
        name="name"
        rules={[{ required: true, message: 'Por favor ingrese su nombre!' }]}
      >
        <Input addonBefore={<FontAwesomeIcon className='icon' icon={faUser}/>} className='inputLogin'/>
      </Form.Item>
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
      <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
        <CustomButton type="primary" htmlType="submit" text='Guardar' className='loginButton'/>
        <Link to={_ROUTES.login}>Volver</Link>
      </Form.Item>
    </Form>
  </div>;
};

RegiterForm.propTypes = {
  onFinish: PropTypes.func,
};

export default RegiterForm;