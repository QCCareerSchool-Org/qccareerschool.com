import { DiscountAmounts } from './discount-amounts';

export interface Campaign {
  id: string | null;
  codeId: number | null;
  offerType: 'constant' | 'percentage' | 'bonus';
  minimumPaymentPlan: 'full' | 'accelerated' | 'part';
  bonusTitle: string;
  bonusHTML: string;
  potentialDiscount: DiscountAmounts;
  discount: DiscountAmounts;
  courseRestrictionType: string | null;
  courses: Array<{
    course_code: string;
    name: string;
  }>;
  requirementsMet: boolean;
}
