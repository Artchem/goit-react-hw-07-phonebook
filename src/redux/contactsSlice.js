import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContact, delContact, fetchContacts } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handelPending = state => {
  state.isLoading = true;
};

const handleFulfilledGet = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};
const handleFulfilledAdd = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items.push(action.payload);
};
const handleFulfilledDel = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = state.items.filter(item => item.id !== action.payload.id);
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactsSlice = createSlice({
  // Ім'я слайсу
  name: 'contacts',
  // Початковий стан редюсера слайсу
  initialState,

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFulfilledGet)
      .addCase(addContact.fulfilled, handleFulfilledAdd)
      .addCase(delContact.fulfilled, handleFulfilledDel)
      .addMatcher(
        isAnyOf(fetchContacts.pending, addContact.pending, delContact.pending),
        handelPending
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          delContact.rejected
        ),
        handleRejected
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
