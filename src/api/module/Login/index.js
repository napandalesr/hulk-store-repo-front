import httpClient from '../../httpClient';

const login = async (data) => {
  return await httpClient.post(`/auth/`, data);
};

export {
  login
};
