import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_HOST;
axios.defaults.headers.common['Content-Type'] = "application/json";
if (window.localStorage.access_token !== undefined) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${window.localStorage.access_token}`;
}

export default axios;
