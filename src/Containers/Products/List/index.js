import React, { useState } from 'react';
import { Table, Input, InputNumber, Popconfirm, Form, Typography, Button } from 'antd';
import Proptypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};


const ProductsList = ({products, update, deleteProducts}) => {
  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState('');

  const isEditing = (record) => record.id === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      name: '',
      descrition: '',
      ...record,
    });
    setEditingKey(record.id);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (id) => {
    try {
      const row = await form.validateFields();
      update(id,row);
      setEditingKey('');
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const columns = [
    {
      title: 'Nombre',
      dataIndex: 'name',
      width: '15%',
      editable: true,
    },
    {
      title: 'Categoria',
      dataIndex: 'nameCategory',
      width: '20%',
    },
    {
      title: 'Descripción',
      dataIndex: 'description',
      width: '35%',
      editable: true,
    },
    {
      title: 'Acciones',
      dataIndex: 'Acciones',
      render: (_, record) => {
        const editable = isEditing(record);
        return <>
        
        {editable ? (
          <span>
            <Typography.Link onClick={() => save(record.id)}>
            Guardar
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <div >
            <Typography.Link style={{padding:'10px'}} disabled={editingKey !== ''} onClick={() => edit(record)}>
              <FontAwesomeIcon icon ={faEdit} />
            </Typography.Link>
            <Popconfirm style={{padding:'10px'}} title="Está seguro?" onConfirm={()=>deleteProducts(record.id)}>
              <Button>
                <FontAwesomeIcon style={{color:'red'}} icon={faTrash}/> 
              </Button>
            </Popconfirm>
          </div>
        )}</>;
      },
    },
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        rowKey='id'
        dataSource={products}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
};

EditableCell.propTypes = {
  editing: Proptypes.bool,
  dataIndex: Proptypes.string,
  title: Proptypes.string,
  inputType: Proptypes.string,
  children: Proptypes.array
};

ProductsList.propTypes = {
  products: Proptypes.array,
  setCategories: Proptypes.func,
  update: Proptypes.func,
  deleteProducts: Proptypes.func
};

export default ProductsList;




