import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

//==========Fetch
async function getContactsDB() {
  return await fetch(
    'https://647bc928c0bae2880ad03fe8.mockapi.io/contacts/'
  ).then(res => res.json());
}

async function postContactDB(item) {
  return await axios.post(
    'https://647bc928c0bae2880ad03fe8.mockapi.io/contacts',
    item
  );
}

async function deleteContactDB(id) {
  return await fetch(
    `https://647bc928c0bae2880ad03fe8.mockapi.io/contacts/${id}`,
    {
      method: 'DELETE',
    }
  ).then(res => res.json());
}

// =========Thunk
export const getContactsDBThunk = createAsyncThunk(
  'contacts/getContacts',
  async () => {
    return await getContactsDB();
  }
);

export const postContactDBThunk = createAsyncThunk(
  'contacts/postContact',
  async item => {
    return await postContactDB(item);
  }
);

export const deleteContactDBThunk = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    return await deleteContactDB(id);
  }
);

// =========Handle
const handlePending = state => {
  state.isLoading = true;
};

const handleDelete = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

//=================
const contactsDBSlice = createSlice({
  name: 'contactsDB',
  initialState: {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56', url: '' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12', url: '' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79', url: '' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26', url: '' },
    ],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    //=====GET
    [getContactsDBThunk.pending]: handlePending,
    [getContactsDBThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.contacts = payload;
      state.error = null;
    },
    [getContactsDBThunk.rejected]: handleDelete,
    //=====POST
    [postContactDBThunk.pending]: handlePending,
    [postContactDBThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      console.log(payload);
      state.contacts = state.contacts.concat([payload.data]);
      console.log(state.contacts);
      state.error = null;
    },
    [postContactDBThunk.rejected]: handleDelete,
    //=====DELETE
    [deleteContactDBThunk.pending]: handlePending,
    [deleteContactDBThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      console.log(payload);
      state.contacts = [...state.contacts].filter(
        ({ id }) => id !== payload.id
      );
      state.error = null;
    },
    [deleteContactDBThunk.rejected]: handleDelete,
  },
});

export const contactsDBReducer = contactsDBSlice.reducer;
