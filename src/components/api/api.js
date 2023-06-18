import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const API_ENDPOINT =
  'https://648eb46875a96b6644442e9e.mockapi.io/contacts/contacts';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const response = await axios.get(`${API_ENDPOINT}`);
  return response.data;
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    const response = await axios.post(`${API_ENDPOINT}`, contact);
    return response.data;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    await axios.delete(`${API_ENDPOINT}/${contactId}`);
    return contactId;
  }
);
