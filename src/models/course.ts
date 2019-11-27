import { InstalmentPlanTypes } from './installment-plan-types';
import { PlanTypes } from './plan-types';

export interface Course {
  code: string;
  name: string;
  primary: boolean;
  baseCost: number;
  discount: PlanTypes;
  secondaryDiscount: number;
  secondaryDiscountAmount: number;
  campaignDiscount: PlanTypes;
  deposit: PlanTypes;
  installmentSize: InstalmentPlanTypes;
  installments: InstalmentPlanTypes;
  countryCode: string;
  provinceCode: string;
  noShipping: boolean;
  currency: {
    code: string;
    symbol: string;
    name: string;
    exchangeRate: number;
  };
  minimumDeposit: number;
  free: boolean;
}
