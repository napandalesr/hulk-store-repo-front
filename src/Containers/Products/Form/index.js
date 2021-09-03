import React from 'react';
import { Col, Form, Input, InputNumber, Row, Select, Divider } from 'antd';
import Proptypes from 'prop-types';

import CustomButton from '../../../Components/CustomButtom';

const ProductsForm = ({onFinish, categories}) => {
  return<>
  <Form
      name="basic"
      labelCol={{ span: 10 }}
      wrapperCol={{ span: 14 }}
      onFinish={onFinish}
      layout='horizontal'
      autoComplete="off"
    >
      <Divider><h5>Productos</h5></Divider>
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
          label="Categoria"
          name="idCategory"
          rules={[{ required: true }]}
        >
          {
            categories !== null &&
            <Select>
            {
              categories.map(item=><Select.Option value={item.id}>{item.name}</Select.Option>)
            }
            </Select>
          }
        </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col lg={{span:10}} xs={{span:24}}>
          <Form.Item
            label="Descripción"
            name="description"
            rules={[{ required: true }]}
          >
            <Input.TextArea showCount maxLength={100} />
          </Form.Item>
        </Col>
        <Col lg={{span:10}} xs={{span:24}}> 
          <Form.Item
            label="Precio Sugerido"
            name="suggestedSalePrice"
          >
            <InputNumber/>
          </Form.Item>
        </Col>
      </Row>
      <Form.Item wrapperCol={{ offset: 11, span: 16 }}>
        <CustomButton text='Guardar' htmlType='submit' type='primary'/>
      </Form.Item>
    </Form>
    
  </>;
};

ProductsForm.propTypes = {
  onFinish: Proptypes.func,
  categories: Proptypes.array
};

export default ProductsForm;