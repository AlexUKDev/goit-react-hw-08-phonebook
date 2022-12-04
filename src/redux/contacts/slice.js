import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { logOut } from 'redux/auth/operations';
import { fetchContacts, addContact, removeContact } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const initialState = {
  items: [],
  isLoading: false,
  filter: '',
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    updateFilterValue(state, action) {
      return {
        ...state,
        filter: action.payload,
      };
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(removeContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(logOut.fulfilled, state => {
        state.items = [];
        state.error = null;
        state.isLoading = false;
      })
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          removeContact.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          removeContact.rejected
        ),
        handleRejected
      ),
});

export const { updateFilterValue } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
