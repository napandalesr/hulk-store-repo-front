import React from 'react';
import { notification, Spin } from 'antd';

import { getAll, patch, post, remove } from '../../api/module/Products';
import { getAll as getAllByCategories } from '../../api/module/Categories';
import ProductsForm from '../../Containers/Products/Form';
import ProductsList from '../../Containers/Products/List';

const Products = () => {
  const [loading, setLoading] = React.useState(false);
  const [products, setProducts] = React.useState(null);
  const [categories, setCategories] = React.useState(null);

  React.useEffect(()=>{
    getAllProducts();
    getAllCategories();
  },[]);

  const getAllProducts = async() => {
    setLoading(true);
    try {
      const response = await getAll();
      if ([200, 201, 203, 204].indexOf(response.status) > -1){
        setProducts(response.data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const getAllCategories = async() => {
    setLoading(true);
    try {
      const response = await getAllByCategories();
      if ([200, 201, 203, 204].indexOf(response.status) > -1){
        console.log(response.data);
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
      data.idCategory=parseInt(data.idCategory);
      const response = await post(data);
      if ([200, 201, 203, 204].indexOf(response.status) > -1){
        notification.success({
          message: "Datos guardados correctamente",
          duration: 5,
        });
        getAllProducts();
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
        getAllProducts();
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const deleteProducts = async (id) => {
    setLoading(true);
    try {
      const response = await remove(id);
      if ([200, 201, 203, 204].indexOf(response.status) > -1){
        notification.success({
          message: "Datos eliminados correctamente",
          duration: 5,
        });
        getAllProducts();
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return <Spin spinning={loading}>
    <div className='main'>
      <ProductsForm onFinish={onFinish}
      categories={categories}/>
      <ProductsList 
      products={products} 
      setProducts={setProducts} 
      update={update} 
      deleteProducts={deleteProducts}
      />
    </div>
  </Spin>;
};

export default Products;