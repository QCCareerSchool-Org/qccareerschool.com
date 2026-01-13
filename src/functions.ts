/**
 * Returns whether the country is a country with a +44 country dialing code. E.g., United Kingdom
 * @param countryCode the two-letter iso-3166-1 alpha-2 country code
 */
export const isCallingCode44 = (countryCode: string): boolean => [ 'GB', 'IM', 'GG', 'JE' ].includes(countryCode);

/**
 * Returns whether the country is a country with a +61 country dialing code. E.g., Australia
 * @param countryCode the two-letter iso-3166-1 alpha-2 country code
 */
export const isCallingCode61 = (countryCode: string): boolean => [ 'AU', 'CX', 'CC' ].includes(countryCode);

/**
 * Returns whether the country is a country with a +64 country dialing code. E.g., New Zealand
 * @param countryCode the two-letter iso-3166-1 alpha-2 country code
 */
export const isCallingCode64 = (countryCode: string): boolean => [ 'NZ', 'PN' ].includes(countryCode);

/**
 * Returns whether the country is a country with a +1 country dialing code. E.g., Canada, United States, Jamaica
 * @param countryCode the two-letter iso-3166-1 alpha-2 country code
 */
export const isCallingCode1 = (countryCode: string): boolean => [ 'CA', 'US', 'AG', 'AI', 'AS', 'BB', 'BM', 'BS', 'DM', 'DO', 'GD', 'GU', 'JM', 'KN', 'KY', 'LC', 'MP', 'MS', 'PR', 'SX', 'TC', 'TT', 'VC', 'VG', 'VI', 'UM' ].includes(countryCode);

/**
 * Returns the country dialing code for a particular country. Only supports +1, +44, +61, and +64.
 * Returns null for unknown
 * @param countryCode the two-letter iso-3166-1 alpha-2 country code
 */
export const getCallingCode = (countryCode?: string): number | null => {
  if (typeof countryCode === 'undefined') {
    return null;
  }
  if (isCallingCode1(countryCode)) {
    return 1;
  }
  if (isCallingCode44(countryCode)) {
    return 44;
  }
  if (isCallingCode61(countryCode)) {
    return 61;
  }
  if (isCallingCode64(countryCode)) {
    return 64;
  }
  return null;
};

/**
 * Returns the telephone number we should display to a visitor from a particular country
 * @param countryCode the two-letter iso-3166-1 alpha-2 country code
 */
export const getTelephoneNumber = (countryCode?: string): string => {
  switch (getCallingCode(countryCode)) {
    case 1:
      return '1-833-600-3751';
    case 44:
      return '0800 066 4734';
    case 61:
      return '0800-451-979';
    case 64:
      return '1800 531 923';
    default:
      return '+1 613-749-8248';
  }
};

export function nl2br(str?: string | null, xhtml?: boolean): string {
  if (typeof str === 'undefined' || str === null) {
    return '';
  }
  const breakTag = (xhtml || typeof xhtml === 'undefined') ? '<br />' : '<br>';
  return str.replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/gu, '$1' + breakTag + '$2');
}

/**
 * Wraps the Notification.requestPermission function so that we know we're always dealing
 * with a Promise and not the deprecated callback version
 */
const requestPermission = async (): Promise<NotificationPermission> => {
  if (!('Notification' in window)) {
    throw Error('Notification object is not supported');
  }
  return window.Notification.requestPermission();
};

/**
 * Asks a user for notification permission, subscribes the user and sends the subscription
 * data to the backend for storage. Returns the id of the subscription in the database.
 */
export const subscribe = async (): Promise<number | undefined> => {
  try {
    const permissionResult = await requestPermission();
    if (permissionResult !== 'granted') {
      throw Error(`We weren't granted permission. User selected "${permissionResult}".`);
    }
    const registration = await navigator.serviceWorker.getRegistration();
    if (!registration) {
      throw Error('Service worker is not registered');
    }
    const subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: 'BEl62iUYgUivxIkv69yViEuiBIa-Ib9-SkvMeAtA3LFgDzkrxZJjSgSnfckjBJuBkr3qBUYIHBQFLXYp5Nksh8U',
    });
    const response = await fetch('https://api.qccareerschool.com/qccareerschool/subscriptions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(subscription.toJSON()),
    });
    if (!response.ok) {
      throw Error('Bad status code from server');
    }
    const responseData = await response.json() as { success: boolean; id: number };
    if (!responseData.success) {
      throw Error('Bad response from server');
    }
    return responseData.id;
  } catch (err) {
    console.error(err);
    return undefined;
  }
};

export function needsProvince(countryCode: string): boolean {
  return [ 'CA', 'US', 'AU' ].includes(countryCode);
}
