import httpClient from '../../httpClient';

const post = async (data) => {
  return await httpClient.post(`/entries/`, data);
};

const getAll = async () => {
  return await httpClient.get(`/entries/`);
};

const get = async (id) => {
  return await httpClient.post(`/entries/${id}`);
};

const patch = async (id, data) => {
  return await httpClient.patch(`/entries/${id}`,data);
};

const remove = async (id) => {
  return await httpClient.delete(`/entries/${id}`);
};

export {
  post,
  getAll,
  get,
  patch,
  remove
};
