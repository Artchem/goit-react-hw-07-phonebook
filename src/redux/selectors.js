import { createSelector } from '@reduxjs/toolkit';

export const getFilterValue = state => state.filter.value;
console.log('getFilterValue :>> ', getFilterValue);

export const selectContactsItems = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const getFiltredContacts = createSelector(
  [selectContactsItems, getFilterValue],
  (contactsItem, filter) => {
    const normalizedFilter = filter.toLowerCase().trim();
    return contactsItem.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);
