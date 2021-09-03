import React from 'react';
import { notification, Spin } from 'antd';

import { getAll, post, patch, remove } from '../../api/module/Categories';
import CategoriesForm from '../../Containers/Categories/Form';
import CategoriesList from '../../Containers/Categories/List';

import './style.scss';

const Categories = () => {
  const [loading, setLoading] = React.useState(false);
  const [categories, setCategories] = React.useState(null);

  React.useEffect(()=>{
    getAllCategories();
  },[]);

  const getAllCategories = async() => {
    setLoading(true);
    try {
      const response = await getAll();
      if ([200, 201, 203, 204].indexOf(response.status) > -1){
        setCategories(response.data);
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
      const response = await post(data);
      if ([200, 201, 203, 204].indexOf(response.status) > -1){
        notification.success({
          message: "Datos guardados correctamente",
          duration: 5,
        });
        getAllCategories();
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
      const response = await patch(id,data);
      if ([200, 201, 203, 204].indexOf(response.status) > -1){
        notification.success({
          message: "Datos actualizados correctamente",
          duration: 5,
        });
        getAllCategories();
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const deleteCategory = async (id) => {
    setLoading(true);
    try {
      const response = await remove(id);
      if ([200, 201, 203, 204].indexOf(response.status) > -1){
        notification.success({
          message: "Datos eliminados correctamente",
          duration: 5,
        });
        getAllCategories();
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return <Spin spinning={loading}>
    <div className='main'>
      <CategoriesForm onFinish={onFinish}/>
      <CategoriesList 
      categories={categories} 
      setCategories={setCategories} 
      update={update} 
      deleteCategory={deleteCategory}/>
    </div>
  </Spin>;
};

export default Categories;