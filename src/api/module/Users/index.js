import httpClient from '../../httpClient';

const post = async (data) => {
  return await httpClient.post(`/users/`, data);
};

const getAll = async () => {
  return await httpClient.get(`/users/`);
};

const get = async (id) => {
  return await httpClient.post(`/users/${id}`);
};

const patch = async (id, data) => {
  return await httpClient.patch(`/users/${id}`,data);
};

const remove = async (id) => {
  return await httpClient.delete(`/users/${id}`);
};

export {
  post,
  getAll,
  get,
  patch,
  remove
};
