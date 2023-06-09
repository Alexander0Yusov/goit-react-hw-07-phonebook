import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContactsDB, postContactDB, deleteContactDB } from './requests';

export const getContactsDBThunk = createAsyncThunk(
  'contactsDB/getContacts',
  async (_, thunkAPI) => {
    try {
      return await getContactsDB();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const postContactDBThunk = createAsyncThunk(
  'contactsDB/postContact',
  async (item, thunkAPI) => {
    try {
      return await postContactDB(item);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactDBThunk = createAsyncThunk(
  'contactsDB/deleteContact',
  async (id, thunkAPI) => {
    try {
      return await deleteContactDB(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const register = createAsyncThunk(
//   'auth/register',
//   async (credentials, thunkAPI) => {
//     try {
//       const res = await axios.post('/users/signup', credentials);
//       // After successful registration, add the token to the HTTP header
//       setAuthHeader(res.data.token);
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
