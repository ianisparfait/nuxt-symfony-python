/**
 * Get all keys from object
 * @param {object} obj - Object to retrieve keys
 * @returns {string[]} - Return array of keys
 */
const getObjectKeys = (obj: object): string[] => {
  return Object.keys(obj);
};

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

const resetLocalStorage = (): void => {
  const hours = 1;
  const now = new Date().getTime();
  let setupTime = localStorage.getItem('setupTime');

  if (!setupTime) {
    setupLocalStorage();
  } else {
    if(now-parseInt(setupTime) > hours*60*60*1000) {
      console.log("Resetting localStorage");
      clearLocalStorage();
      setLocalStorage("setupTime", now.toString());
      window.location.href = `${window.location.origin}/connexion`;
    }
  }
};

const clearLocalStorage = (): void => {
  localStorage.clear();
};

const setupLocalStorage = (): void => {
  const now = new Date().getTime();
  const setupTime = localStorage.getItem('setupTime');
  if (setupTime == null) {
    localStorage.setItem('setupTime', now.toString())
  }
};

export {
  getObjectKeys,
  setLocalStorage,
  getLocalStorage,
  setSessionStorage,
  getSessionStorage,
  resetLocalStorage,
  clearLocalStorage,
  setupLocalStorage
};
