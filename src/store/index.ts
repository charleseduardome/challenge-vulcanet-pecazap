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

const enhancer =
  process.env.NODE_ENV === 'development' ? console.tron.createEnhancer() : null;

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store: Store<ApplicationState> = createStore(persistedReducer, enhancer);
const persistor = persistStore(store);

export { store, persistor };
