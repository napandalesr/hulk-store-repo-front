import { useLocation } from 'react-router-dom';

export function IsLoggedIn(){
    return window.localStorage['access_token'] !== undefined;
}

export function setUserSession(session_data) {
  let user_data = session_data.data;
  window.localStorage['access_token'] = user_data.accessToken;
  window.localStorage['userId'] = user_data.id;
  window.localStorage['username'] = user_data.username;
  window.localStorage['first_name'] = user_data.name;
  window.location.reload();
}

export function LogOut(){
    window.localStorage.clear();
    window.location = '/';
}

export const useQuery = () => new URLSearchParams(useLocation().search);

