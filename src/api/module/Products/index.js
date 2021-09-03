import httpClient from '../../httpClient';

const post = async (data) => {
  return await httpClient.post(`/products/`, data);
};

const getAll = async () => {
  return await httpClient.get(`/products/`);
};

const get = async (id) => {
  return await httpClient.post(`/products/${id}`);
};

const patch = async (id, data) => {
  return await httpClient.patch(`/products/${id}`,data);
};

const remove = async (id) => {
  return await httpClient.delete(`/products/${id}`);
};

export {
  post,
  getAll,
  get,
  patch,
  remove
};
