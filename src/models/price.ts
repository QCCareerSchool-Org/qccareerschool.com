type Plan = {
  /** the discount based on the payment plan */
  discount: number;
  /** the amount to be paid today */
  deposit: number;
  /** the size of the installments  */
  installmentSize: number;
  /** the number of installments */
  installments: number;
  /** any amount left over due to rounding */
  remainder: number;
  /** the final price after discounts */
  total: number;
};

type Price = {
  /** the base price before any discounts */
  cost: number;
  /** the discount on courses after the first course */
  multiCourseDiscount: number;
  /** additional promotional discount */
  promoDiscount: number;
  /** the discounted price (before payment plan discount) */
  discountedCost: number;
  /** the payment plans */
  plans: { full: Plan; part: Plan };
};

type CourseResult = {
  code: string;
  name: string;
  primary: boolean;
  free: boolean;
} & Price;

type Currency = {
  code: string;
  symbol: string;
  name: string;
  exchangeRate: number;
};

export type PriceResult = {
  countryCode: string;
  provinceCode?: string;
  currency: Currency;
  disclaimers: string[];
  notes: string[];
  noShipping: boolean;
  noShippingMessage?: string;
  courses: CourseResult[];
} & Price;
