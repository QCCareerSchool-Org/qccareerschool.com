import { useCallback, useRef, useSyncExternalStore } from 'react';

/**
 * Listens for events and returns a value
 * @param type the event type to listen for
 * @param valueSelector a selector for the value, e.g., w => w.innerWidth
 * @param fallbackValue a default value to use when rendering on the server
 * @param targetSelector a selector for the object to attach listeners to, defaults to `window`, e.g. w => w.matchMedia('(min-width: 768px)')
 * @param addEventListenerOptions options to pass to addEventListener and removeEventListener
 * @returns the value
 */
// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters
export const useWindowListener = <T, E extends Event = Event>(
  type: string,
  valueSelector: (w: Window, e?: E) => T,
  fallbackValue?: T,
  targetSelector?: (w: Window) => EventTarget,
  addEventListenerOptions?: AddEventListenerOptions | boolean,
): Readonly<T> | undefined => {
  const currentValue = useRef<T>(fallbackValue);

  const subscribe = useCallback((onStoreChange: () => void): (() => void) => {
    // update the value once before any events are received
    currentValue.current = valueSelector(window);

    const handler = (e: Event) => {
      // rather than evaluate valueSelector in getSnapshot, we do it here,
      // where we have access to the event, and store the value in a ref
      currentValue.current = valueSelector(window, e as E);
      onStoreChange();
    };

    const target = targetSelector ? targetSelector(window) : window;

    target.addEventListener(type, handler, addEventListenerOptions);
    return () => target.removeEventListener(type, handler, addEventListenerOptions);
  }, [ type, valueSelector, targetSelector, addEventListenerOptions ]);

  // we'd evaluate valueSelector here, but then we couldn't pass the event to it
  const getSnapshot = () => currentValue.current;

  const getServerSnapshot = () => fallbackValue;

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
};
