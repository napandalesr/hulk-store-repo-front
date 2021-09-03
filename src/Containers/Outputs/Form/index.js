import React from 'react';
import { Col, Divider, Form, Row, InputNumber, Select, Input } from 'antd';
import Proptypes from 'prop-types';

import CustomButton from '../../../Components/CustomButtom';

const {Option} = Select;

const OutputsForm = ({onFinish,products}) => {
  return<>
  <Form
      name="basic"
      labelCol={{ span: 10 }}
      wrapperCol={{ span: 14 }}
      onFinish={onFinish}
      layout='horizontal'
      autoComplete="off"
    >
      <Divider><h5>Salidas</h5></Divider>
      <Row>
        <Col lg={{span:10}} xs={{span:24}}> 
          <Form.Item
            label="Producto"
            name="idProduct"
          ><Select>
            {
              products !== null &&
              <>
                {
                  products.map(item=><Option value={item.id}>{item.name}</Option>)
                }
              
              </>
            }</Select>
          </Form.Item>
        </Col>
        <Col lg={{span:10}} xs={{span:24}}>
          <Form.Item
            label="Unidades"
            name="units"
            rules={[{ required: true }]}
          >
            <InputNumber />
          </Form.Item>
        </Col>
      </Row>
      <Row>
      <Col lg={{span:10}} xs={{span:24}}>
        <Form.Item
          label="Costo Unitario"
          name="costUnit"
          rules={[{ required: true }]}
        >
          <InputNumber />
        </Form.Item>
      </Col>
      <Col lg={{span:10}} xs={{span:24}}>
        <Form.Item
          label="Descuento"
          name="discount"
          rules={[{ required: true }]}
        >
          <InputNumber />
        </Form.Item>
      </Col>
      </Row>
      <Row>
      <Col lg={{span:10}} xs={{span:24}}>
          <Form.Item
            label="Observación"
            name="obsevation"
            rules={[{ required: true }]}
          >
            <Input.TextArea showCount maxLength={100} />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item wrapperCol={{ offset: 11, span: 16 }}>
        <CustomButton text='Guardar' htmlType='submit' type='primary'/>
      </Form.Item>
    </Form>
    
  </>;
};

OutputsForm.propTypes = {
  onFinish: Proptypes.func,
  products: Proptypes.array
};

export default OutputsForm;