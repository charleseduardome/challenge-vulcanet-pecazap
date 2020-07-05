import { Reducer } from 'redux';
import producer from 'immer';
import { PlanState } from './types';

const INITIAL_STATE: PlanState = {
  plan: {
    id: -1,
    name: '',
    description: '',
    prices: {
      monthly: 0,
      yearly: 0,
    },
    features: [],
  },
  type: '',
  attendants: 0,
  subtotal: 0,
  total: 0,
};

const plan: Reducer<PlanState> = (state = INITIAL_STATE, action) => {
  return producer(state, draft => {
    switch (action.type) {
      case '@plan/CHOOSE_PLAN': {
        if (action.payload.type === 'monthly') {
          draft.plan = action.payload.data;
          draft.type = action.payload.type;
          draft.total = action.payload.data.prices.monthly + state.subtotal;
          break;
        } else {
          draft.plan = action.payload.data;
          draft.type = action.payload.type;
          draft.total = action.payload.data.prices.yearly + state.subtotal;
          break;
        }
      }

      case '@plan/CHANGE_PLAN_TYPE': {
        if (action.payload.type === 'monthly') {
          draft.type = action.payload.type;
          draft.total = state.plan.prices.monthly + state.subtotal;
          break;
        } else {
          draft.type = action.payload.type;
          draft.total = state.plan.prices.yearly + state.subtotal;
          break;
        }
      }

      case '@cart/UPDATE_ATTENDANTS': {
        if (action.payload.amount < 0) {
          break;
        } else {
          if (state.type === 'monthly') {
            draft.subtotal = action.payload.amount * action.payload.cost;
            draft.total =
              state.plan.prices.monthly +
              action.payload.amount * action.payload.cost;
            draft.attendants = action.payload.amount;
            break;
          } else {
            draft.subtotal = action.payload.amount * action.payload.cost;
            draft.total =
              state.plan.prices.yearly +
              action.payload.amount * action.payload.cost;
            draft.attendants = action.payload.amount;
            break;
          }
        }
      }
    }
  });
};

export default plan;
