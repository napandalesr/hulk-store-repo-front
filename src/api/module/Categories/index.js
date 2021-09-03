import httpClient from '../../httpClient';

const post = async (data) => {
  return await httpClient.post(`/categories/`, data);
};

const getAll = async () => {
  return await httpClient.get(`/categories/`);
};

const get = async (id) => {
  return await httpClient.post(`/categories/${id}`);
};

const patch = async (id, data) => {
  return await httpClient.patch(`/categories/${id}`,data);
};

const remove = async (id) => {
  return await httpClient.delete(`/categories/${id}`);
};

export {
  post,
  getAll,
  get,
  patch,
  remove
};
