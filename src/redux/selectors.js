export const getContacts = state => state.contacts.items;
export const getIsLoading = ({ contacts }) => contacts.isLoading;
export const getError = ({ contacts }) => contacts.error;

export const getFilterValue = state => state.filter;
