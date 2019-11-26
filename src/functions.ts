export const getTelephoneNumber = (countryCode: string) => {
  if (countryCode === 'CA') {
    return '1-833-000-000';
  }
  return '+1 613-749-8248';
};

export function getQueryString(params: any) {
  return Object.keys(params).map(k => {
    if (Array.isArray(params[k])) {
      return params[k].map((val: any) => `${encodeURIComponent(k)}[]=${encodeURIComponent(val)}`).join('&');
    }
    return `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`;
  }).join('&');
}

export function nl2br(str?: string | null, xhtml?: boolean) {
  if (typeof str === 'undefined' || str === null) {
    return '';
  }
  const breakTag = (xhtml || typeof xhtml === 'undefined') ? '<br />' : '<br>';
  return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
}
