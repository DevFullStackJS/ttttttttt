import axios from 'axios';

import config from '../../data/config';
import store from '../redux/store';

export const headers = (token = '') => {
  const state: any = store.getState();
  return {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    Authorization: `${
      state.users && state.users.token ? state.users.token : token
    }`,
  };
};

export const get = async (url, token) => {
  try {
    const res = await axios.get(`${config.baseURL}${config.pathApi}${url}`, {
      headers: token ? headers(token) : headers(),
    });
    return res.data;
  } catch (e) {
    const errors = e ? JSON.parse(JSON.stringify(e)) : {error: true};
    return errors;
  }
};

export const post = async (url, data, token = '') => {
  try {
    const res = await axios.post(
      `${config.baseURL}${config.pathApi}${url}`,
      data,
      {
        headers: headers(token),
      },
    );
    return res.data;
  } catch (e) {
    const errors = e ? JSON.parse(JSON.stringify(e)) : {error: true};
    return errors;
  }
};

export const put = async (url, data = {}, token) => {
  try {
    const res = await axios.put(
      `${config.baseURL}${config.pathApi}${url}`,
      data,
      {
        headers: token ? headers(token) : headers(),
      },
    );
    return res.data;
  } catch (e) {
    const errors = e ? JSON.parse(JSON.stringify(e)) : {error: true};
    return errors;
  }
};

export const remove = async (url, token) => {
  try {
    const res = await axios.delete(`${config.baseURL}${config.pathApi}${url}`, {
      headers: headers(token),
    });
    return res.data;
  } catch (e) {
    const errors = e ? JSON.parse(JSON.stringify(e)) : {error: true};
    return errors;
  }
};

export const patch = async () => {};

export default {
  get,
  patch,
  post,
  put,
  remove,
};
