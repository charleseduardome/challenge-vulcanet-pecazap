import { createStore, Store } from 'redux';

import rootReducer from './modules/rootReducer';
import { PlanState } from './modules/plans/types';

export interface ApplicationState {
  plan: PlanState;
}

const enhancer =
  process.env.NODE_ENV === 'development' ? console.tron.createEnhancer() : null;

const store: Store<ApplicationState> = createStore(rootReducer, enhancer);
export default store;
