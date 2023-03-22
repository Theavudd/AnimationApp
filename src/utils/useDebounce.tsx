import {useEffect, useState} from 'react';

/**
 * used to debounce text values
 * @param value updated value
 * @param delay delay time
 */

const useDebounce = (value: any, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  /**
   * set new settimeout when value changes and call cleartimeout to clear previous one
   */
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
