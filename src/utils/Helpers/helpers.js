import httpClient from "../../api/httpClient";
import { useLocation } from 'react-router-dom';
import { notification } from 'antd';

export function IsLoggedIn(){
    return window.localStorage['access_token'] !== undefined;
}

export function setUserSession(session_data) {
  let user_data = session_data.attributes;

  window.localStorage['access_token'] = session_data.token;
  window.localStorage['userId'] = user_data.id;
  window.localStorage['username'] = user_data.username;
  window.localStorage['email'] = user_data.email;
  window.localStorage['first_name'] = user_data.first_name;
  window.localStorage['last_name'] = user_data.last_name;
  window.localStorage['last_login'] = user_data.last_login;
  window.localStorage['groups'] = JSON.stringify(user_data.groups);
  window.location.reload();
}

export function LogOut(){
    window.localStorage.clear();
    window.location = '/';
}

export function generate_uuid() {
    let dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}

export const IsRole = (rol) => {
    let groups = JSON.parse(localStorage["groups"]);
    if (groups.length > 0) {
        if (groups[0] === rol) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}
export const useQuery = () => new URLSearchParams(useLocation().search);

export const DateFormat = (date) => {
    if (date) {
      let format = new Date(date).toISOString().split('T')[0];
      return format;
    }
  };

export const verifyToken = async () => {
  try {
    if(navigator.onLine) {
      let token = window.localStorage.access_token;
      const response = await httpClient.post("/token/verify/", { token });
      } else {
        notification.success({
          message: "No tiene conexión",
          description: "Compruebe su conexión a internet",
          duration: 2,
        });
      }
  }
  catch(err) {
    console.log(err);
    window.localStorage.clear();
    window.location.reload();
  }
}
