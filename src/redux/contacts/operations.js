import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { notifySettings } from 'utils/const';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/contacts');

      Notify.success(`${data.length} contacts were uploaded`, notifySettings);

      return data;
    } catch (error) {
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

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const { data } = await axios.post('/contacts', newContact);

      Notify.success(`${data.name} added successfully!`, notifySettings);

      return data;
    } catch (error) {
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

export const removeContact = createAsyncThunk(
  'contacts/removeContact',
  async (contactId, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${contactId}`);

      Notify.success(` ${data.name} removed successfully!`, notifySettings);
      return data;
    } catch (error) {
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

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ({ name, number, id }, thunkAPI) => {
    try {
      const { data } = await axios.patch(`/contacts/${id}`, {
        name,
        number,
      });

      Notify.success(` ${data.name} updated successfully!`, notifySettings);

      return data;
    } catch (error) {
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
