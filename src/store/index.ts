import { createStore, Store } from 'redux';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './modules/rootReducer';
import { PlanState } from './modules/plans/types';

export interface ApplicationState {
  plan: PlanState;
}

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store: Store<ApplicationState> = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
