import httpClient from '../../httpClient';

const post = async (data) => {
  return await httpClient.post(`/outputs/`, data);
};

const getAll = async () => {
  return await httpClient.get(`/outputs/`);
};

const get = async (id) => {
  return await httpClient.post(`/outputs/${id}`);
};

const patch = async (id, data) => {
  return await httpClient.patch(`/outputs/${id}`,data);
};

const remove = async (id) => {
  return await httpClient.delete(`/outputs/${id}`);
};

export {
  post,
  getAll,
  get,
  patch,
  remove
};
