import React from 'react';
import { notification, Spin } from 'antd';

import { getAll, post, patch, remove } from '../../api/module/Outputs';
import { getAll as getAllByProducts } from '../../api/module/Products';
import OutputsForm from '../../Containers/Outputs/Form';
import OutputsList from '../../Containers/Outputs/List';

const Outputs = () => {
  const [loading, setLoading] = React.useState(false);
  const [entries, setEntries] = React.useState(null);
  const [products, setProducts] = React.useState(null);

  React.useEffect(()=>{
    getAllEntries();
    getAllProducts();
  },[]);

  const getAllEntries = async() => {
    setLoading(true);
    try {
      const response = await getAll();
      if ([200, 201, 203, 204].indexOf(response.status) > -1){
        setEntries(response.data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const getAllProducts = async() => {
    setLoading(true);
    try {
      const response = await getAllByProducts();
      if ([200, 201, 203, 204].indexOf(response.status) > -1){
        setProducts(response.data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const onFinish = async (data) => {
    setLoading(true);
    try {
      data.idUser = parseInt(localStorage.getItem('userId'));
      const response = await post(data);
      if ([200, 201, 203, 204].indexOf(response.status) > -1){
        notification.success({
          message: "Datos guardados correctamente",
          duration: 5,
        });
        getAllEntries();
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const update = async (id,data) => {
    setLoading(true);
    try {
      data.costUnit=parseInt(data.costUnit);
      const response = await patch(id,data);
      if ([200, 201, 203, 204].indexOf(response.status) > -1){
        notification.success({
          message: "Datos actualizados correctamente",
          duration: 5,
        });
        getAllEntries();
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const deleteEntries = async (id) => {
    setLoading(true);
    try {
      const response = await remove(id);
      if ([200, 201, 203, 204].indexOf(response.status) > -1){
        notification.success({
          message: "Datos eliminados correctamente",
          duration: 5,
        });
        getAllEntries();
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return <Spin spinning={loading}>
    <div className='main'>
      <OutputsForm onFinish={onFinish}
      products={products}/>
      <OutputsList 
      entries={entries} 
      update={update} 
      deleteEntries={deleteEntries}/>
    </div>
  </Spin>;
};

export default Outputs;