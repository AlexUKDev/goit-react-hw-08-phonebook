import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { contactsReducer } from '../redux/contacts.Slice';
import { filterReducer } from '../redux/filter.Slice';

import { LS_KEY } from '../utils/localStorage';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

const rootPersistConfig = {
  key: LS_KEY,
  storage: storage,
  whitelist: ['contacts'],
};

const persistedRootReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedRootReducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
