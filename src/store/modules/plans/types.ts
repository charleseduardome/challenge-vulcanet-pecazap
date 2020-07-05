export interface Prices {
  readonly monthly: number;
  readonly yearly: number;
}
export interface Plan {
  readonly id: number;
  readonly name: string;
  readonly description: string;
  readonly prices: Prices;
  readonly features: string[];
}

export interface PlanState {
  readonly plan: Plan;
  readonly type: String;
  readonly attendants: number;
  readonly subtotal: number;
  readonly total: number;
}
