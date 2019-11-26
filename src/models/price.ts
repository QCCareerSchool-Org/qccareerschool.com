import { Campaign } from './campaign';
import { Course } from './course';
import { Currency } from './currency';
import { InstalmentPlanTypes } from './installment-plan-types';
import { PlanTypes } from './plan-types';

export interface Price {
  cost: number;
  secondaryDiscount: number;
  discount: PlanTypes;
  deposit: PlanTypes;
  installmentSize: InstalmentPlanTypes;
  installments: InstalmentPlanTypes;
  countryCode: string | null;
  provinceCode: string | null;
  currency: Currency;
  disclaimers: string[];
  notes: string[];
  campaign?: Campaign;
  noShipping: boolean;
  noShippingMessage?: string;
  numCourses: number;
  courses: { [course: string]: Course };
  discountAll: boolean;
  complete: boolean;
  noShipCountry: boolean;
}
