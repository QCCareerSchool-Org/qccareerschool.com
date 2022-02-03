/**
 * Creates a query string from an object
 *
 * Supports plain values and arrays, but doesn't support nested keys
 *
 * @param params the query string values
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createQueryString = (params: { [key: string]: any }): string => {
  return Object.keys(params).map(k => {
    const param = params[k];
    if (Array.isArray(param)) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return param.map((val: any) => `${encodeURIComponent(k)}[]=${encodeURIComponent(val)}`).join('&');
    }
    return `${encodeURIComponent(k)}=${encodeURIComponent(param)}`;
  }).join('&');
};
