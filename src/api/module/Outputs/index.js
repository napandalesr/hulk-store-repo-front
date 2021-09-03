import httpClient from '../../httpClient';

const post = async (data) => {
  return await httpClient.post(`/output/`, data);
};

const getAll = async () => {
  return await httpClient.get(`/output/`);
};

const get = async (id) => {
  return await httpClient.post(`/output/${id}`);
};

const patch = async (id, data) => {
  return await httpClient.patch(`/output/${id}`,data);
};

const remove = async (id) => {
  return await httpClient.delete(`/output/${id}`);
};

export {
  post,
  getAll,
  get,
  patch,
  remove
};
