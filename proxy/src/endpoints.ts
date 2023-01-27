/** Server URL */
export const URL_API = "/api";
export const URL_API_BACK = `${URL_API}/.back`;
export const URL_API_UserLogin = `${URL_API_BACK}/login`;
export const URL_API_UserInfo = `${URL_API_BACK}/user`;
export const URL_API_AdminInfo = `${URL_API_BACK}/admin`;
export const URL_API_CheckRole = `${URL_API_BACK}/checkRole`;

/** Service Back */
export const URL_SERVICE = "http://nginx/api";
export const ENDPOINT_SERVICE_HELLO = `${URL_SERVICE}/hello`;
export const ENDPOINT_SERVICE_Login = `${URL_SERVICE}/login`;
export const ENDPOINT_SERVICE_UserInfo = `${URL_SERVICE}/user`;
export const ENDPOINT_SERVICE_AdminInfo = `${URL_SERVICE}/admin`;
export const ENDPOINT_SERVICE_USER_CheckRole = `${URL_SERVICE}/check/role`;

export const urlsAcceptedWithoutConnection = [
  URL_API,
  URL_API_BACK,
  URL_API_UserLogin,
];
