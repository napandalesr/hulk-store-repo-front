import React from 'react';
import { Col, Form, Input, Row, Divider } from 'antd';
import Proptypes from 'prop-types';

import CustomButton from '../../../Components/CustomButtom';

const CategoriesForm = ({onFinish}) => {
  return<>
  <Form
      name="basic"
      labelCol={{ span: 10 }}
      wrapperCol={{ span: 14 }}
      onFinish={onFinish}
      layout='horizontal'
      autoComplete="off"
    >
      <Divider><h5>Categorias</h5></Divider>
      <Row>
        <Col lg={{span:10}} xs={{span:24}}> 
        <Form.Item
          label="Nombre"
          name="name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        </Col>
        <Col lg={{span:10}} xs={{span:24}}>
          <Form.Item
            label="Descripción"
            name="description"
            rules={[{ required: true }]}
          >
            <Input.TextArea showCount maxLength={100} />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        
      </Row>
      <Form.Item wrapperCol={{ offset: 11, span: 16 }}>
        <CustomButton text='Guardar' htmlType='submit' type='primary'/>
      </Form.Item>
    </Form>
    
  </>;
};

CategoriesForm.propTypes = {
  onFinish: Proptypes.func
};

export default CategoriesForm;