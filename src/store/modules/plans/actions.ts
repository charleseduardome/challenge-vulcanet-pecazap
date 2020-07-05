import { Plan } from './types';

export const ChoosePlan = (data: Plan, type: string) => {
  return {
    type: '@plan/CHOOSE_PLAN',
    payload: { data, type },
  };
};

export const ChangePlanType = (type: string) => {
  return {
    type: '@plan/CHANGE_PLAN_TYPE',
    payload: { type },
  };
};

export const UpdateAttendants = (amount: number, cost: number) => {
  return {
    type: '@cart/UPDATE_ATTENDANTS',
    payload: { amount, cost },
  };
};
