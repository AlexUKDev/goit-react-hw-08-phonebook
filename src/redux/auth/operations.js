import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// it does't works
// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
const baseURL = 'https://connections-api.herokuapp.com';

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
      const { data } = await axios.post(`${baseURL}/users/signup`, credentials);
      setAuthHeader(data.token);

      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post(`${baseURL}/users/login`, credentials);

      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  `${baseURL}auth/logout`,
  async (_, thunkAPI) => {
    try {
      //  axios here  lost baseURL
      // console.log(axios.defaults.baseURL);
      await axios.post('https://connections-api.herokuapp.com/users/logout');

      resetAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

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

      const res = await axios.get(`${baseURL}/users/current`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
