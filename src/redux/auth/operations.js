import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { notifySettings } from 'utils/const';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const resetAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const userRegister = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post(`/users/signup`, credentials);

      setAuthHeader(data.token);

      Notify.success(
        `${data.user.name} have successfully registered`,
        notifySettings
      );

      return data;
    } catch (error) {
      if (error.message === 'Request failed with status code 400') {
        Notify.info(
          `A user with this name or email is already registered. Log in!`,
          notifySettings
        );
      }

      if (error.response.status === 500) {
        Notify.warning(
          `Something went wrong on the server. Try again`,
          notifySettings
        );
      }

      if (error.code === 'ERR_NETWORK') {
        Notify.failure(
          `Something went wrong. Check internet connection and try again`,
          notifySettings
        );
      }

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post(`/users/login`, credentials);

      Notify.success(
        ` Welcome to phonebook app. Glad to see you ${data.user.name}`,
        notifySettings
      );

      setAuthHeader(data.token);
      return data;
    } catch (error) {
      if (error.response.status === 400) {
        Notify.info(
          `Invalid name or password. Please try again`,
          notifySettings
        );
      }

      if (error.response.status === 500) {
        Notify.warning(
          `Something went wrong on the server. Try again`,
          notifySettings
        );
      }

      if (error.code === 'ERR_NETWORK') {
        Notify.failure(
          `Something went wrong. Check internet connection and try again`,
          notifySettings
        );
      }

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post(`/users/logout`);

    Notify.success(` See you soon. Have a good day`, notifySettings);

    resetAuthHeader();
  } catch (error) {
    if (error.response.status === 400) {
      Notify.warning('Log out is failed, please try again', notifySettings);
    }

    if (error.response.status === 500) {
      Notify.warning(
        `Something went wrong on the server. Try again`,
        notifySettings
      );
    }

    if (error.code === 'ERR_NETWORK') {
      Notify.failure(
        `Something went wrong. Check internet connection and try again`,
        notifySettings
      );
    }

    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);

      const res = await axios.get(`/users/current`);
      return res.data;
    } catch (error) {
      if (error.response.status === 401) {
        resetAuthHeader();
        Notify.warning(
          `Your security certificate is not valid. You should login again`,
          notifySettings
        );
      }

      if (error.response.status === 500) {
        Notify.warning(
          `Something went wrong on the server. Try again`,
          notifySettings
        );
      }

      if (error.code === 'ERR_NETWORK') {
        Notify.failure(
          `Something went wrong. Check internet connection and try again`,
          notifySettings
        );
      }

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
