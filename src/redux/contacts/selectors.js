import { createSelector } from '@reduxjs/toolkit';

export const selectAllContacts = state => state.contacts.items;

export const selectFilter = state => state.contacts.filter;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectAllContacts, selectFilter],
  (contacts, filterValue) => {
    const normalizeFilterValue = filterValue.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilterValue)
    );
  }
);
