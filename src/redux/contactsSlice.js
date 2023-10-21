import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const contactsSlice = createSlice({
  // Ім'я слайсу
  name: 'contacts',
  // Початковий стан редюсера слайсу
  initialState,
  // Об'єкт редюсерів
  reducers: {
    fetchingInProgress(state) {
      state.isLoading = true;
    },
    fetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    fetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    addContact(state, action) {
      state.items.push(action.payload);
    },

    delContact(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
  },
});

// Генератори екшенів
export const {
  addContact,
  delContact,
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} = contactsSlice.actions;
// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;
