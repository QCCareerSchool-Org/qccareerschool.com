import fetch from 'isomorphic-unfetch';
import { Auth } from './providers/auth';

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

/**
 * Wraps the Notification.requestPermission function so that we know we're always dealing
 * with a Promise and not the deprecated callback version
 */
const requestPermission = async () => {
  return new Promise((resolve, reject) => {
    if (!('Notification' in window)) {
      reject(Error('Notification object is not supported'));
    }
    const permissionResult = window.Notification.requestPermission(resolve);
    if (permissionResult) {
      permissionResult.then(resolve, reject);
    }
  });
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
    const responseData = await response.json();
    if (!responseData.success) {
      throw Error('Bad response from server');
    }
    return responseData.id as number;
  } catch (err) {
    console.error(err);
    return undefined;
  }
};

export async function login(emailAddress: string, password: string): Promise<Auth | number> {
  try {
    const response = await fetch('https://api.qccareerschool.com/qccareerschool/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ emailAddress, password }),
      credentials: 'include',
    });
    if (!response.ok) {
      return response.status;
    }
    const data = await response.json() as Auth;
    if (!(typeof data.id === 'number' && typeof data.emailAddress === 'string')) {
      return 500;
    }
    return data;
  } catch (err) {
    console.error(err);
    return 500;
  }
}

export async function cookieLogin(): Promise<Auth | undefined> {
  try {
    const response = await fetch('https://api.qccareerschool.com/qccareerschool/cookieLogin', {
      method: 'POST',
      credentials: 'include',
    });
    if (!response.ok) {
      throw Error('Bad status code from server');
    }
    const data = await response.json() as Auth;
    if (!(typeof data.id === 'number' && typeof data.emailAddress === 'string')) {
      throw Error('Unexpected response');
    }
    return data;
  } catch (err) {
    console.error(err);
    return undefined;
  }
}

export async function register(emailAddress: string, password: string): Promise<Auth | number> {
  try {
    const response = await fetch('https://api.qccareerschool.com/qccareerschool/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ emailAddress, password }),
      credentials: 'include',
    });
    if (!response.ok) {
      return response.status;
    }
    const data = await response.json() as Auth;
    if (!(typeof data.id === 'number' && typeof data.emailAddress === 'string')) {
      return 500;
    }
    return data;
  } catch (err) {
    console.error(err);
    return 500;
  }
}
