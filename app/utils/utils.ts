/**
 * Set value into localStorage
 * @param {string} key - Key to set value
 * @param {string} value - Value to set
 */
const setLocalStorage = (key: string, value: string): void => {
  localStorage.setItem(key, value);
};

/**
 * Get value from localStorage key
 * @param {string} key - Key to get value
 * @returns {string|null} - Return value from localStorage
 */
const getLocalStorage = (key: string): string | null => {
  return localStorage.getItem(key);
};

/**
 * Set value into sessionStorage
 * @param {string} key - Key to set value
 * @param {string} value - Value to set
 */
const setSessionStorage = (key: string, value: string): void => {
  sessionStorage.setItem(key, value);
};

/**
 * get value from sessionStorage key
 * @param {string} key - Key to get value
 * @returns {string|null} - Return value from sessionStorage
 */
const getSessionStorage = (key: string): string | null => {
  return sessionStorage.getItem(key);
};

export {
  setLocalStorage,
  getLocalStorage,
  setSessionStorage,
  getSessionStorage,
};
