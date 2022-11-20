export const LS_KEY = 'saved_contacts';

export const getFromLocalStorage = JSON.parse(localStorage.getItem(LS_KEY));
export const saveToLocalStorage = contacts => {
  const prepareContacts = JSON.stringify(contacts);
  localStorage.setItem(LS_KEY, prepareContacts);
};
