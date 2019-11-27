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
    const permissionResult = Notification.requestPermission(resolve);
    if (permissionResult) {
      permissionResult.then(resolve, reject);
    }
  });
};

export const subscribe = () => {
  requestPermission().then(permissionResult => {
    if (permissionResult !== 'granted') {
      throw Error(`We weren't granted permission. User selected "${permissionResult}".`);
    }
  }).then(() => {
    return navigator.serviceWorker.getRegistration();
  }).then(registration => {
    if (!registration) {
      throw Error('Service worker is not registered');
    }
    return registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: 'BEl62iUYgUivxIkv69yViEuiBIa-Ib9-SkvMeAtA3LFgDzkrxZJjSgSnfckjBJuBkr3qBUYIHBQFLXYp5Nksh8U',
    });
  }).then(subscription => {
    console.log(subscription.toJSON());
    const body = {
      endpoint: subscription.endpoint,
      expirationTime: subscription.expirationTime,
      p256dh: subscription.getKey('p256dh'),
      auth: subscription.getKey('auth'),
    };
    return fetch('https://api.qccareerschool.com/subscriptions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  }).then(response => {
    if (!response.ok) {
      throw Error('Bad status code from server');
    }
    return response.json();
  }).then(responseData => {
    if (!responseData.success) {
      throw Error('Bad response from server');
    }
    console.log(responseData);
  }).catch(console.error);
};
