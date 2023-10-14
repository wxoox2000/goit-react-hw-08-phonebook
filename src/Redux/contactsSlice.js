import { fetchContacts, addContactToBase, deleteContactFromBase } from './operations';


const { createSlice } = require('@reduxjs/toolkit');

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [], 
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
    [addContactToBase.pending]: handlePending,
    [addContactToBase.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = [...state.items, action.payload];
    },
    [addContactToBase.rejected]: handleRejected,
    [deleteContactFromBase.pending]: handlePending,
    [deleteContactFromBase.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(contact => contact.id !== action.payload.id);
    },
    [deleteContactFromBase.rejected]: handleRejected,
  },

});
export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
