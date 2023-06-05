import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContactsDB, postContactDB, deleteContactDB } from './requests';

export const getContactsDBThunk = createAsyncThunk(
  'contactsDB/getContacts',
  async () => {
    return await getContactsDB();
  }
);

export const postContactDBThunk = createAsyncThunk(
  'contactsDB/postContact',
  async item => {
    return await postContactDB(item);
  }
);

export const deleteContactDBThunk = createAsyncThunk(
  'contactsDB/deleteContact',
  async id => {
    return await deleteContactDB(id);
  }
);
