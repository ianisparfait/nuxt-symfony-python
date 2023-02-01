/** Server URL */
export const URL_API = "/api";
export const URL_API_BACK = `${URL_API}/.back`;
export const URL_API_UserLogin = `${URL_API_BACK}/login`;
export const URL_API_UserInfo = `${URL_API_BACK}/user`;
export const URL_API_AdminInfo = `${URL_API_BACK}/admin`;
export const URL_API_CheckRole = `${URL_API_BACK}/checkRole`;
export const URL_API_GET_FUTURE_USERS = `${URL_API_BACK}/future-users`;
export const URL_API_GET_ALL_USERS = `${URL_API_BACK}/users`;
export const URL_API_POST_FUTURE_USER = `${URL_API_BACK}/future-user`;
export const URL_API_POST_VALID_FUTURE_USER = `${URL_API_BACK}/future-user/:id`;

/** Service Back */
export const URL_SERVICE = "http://nginx/api";
export const ENDPOINT_SERVICE_HELLO = `${URL_SERVICE}/hello`;
export const ENDPOINT_SERVICE_Login = `${URL_SERVICE}/login`;
export const ENDPOINT_SERVICE_UserInfo = `${URL_SERVICE}/user`;
export const ENDPOINT_SERVICE_AdminInfo = `${URL_SERVICE}/admin`;
export const ENDPOINT_SERVICE_USER_CheckRole = `${URL_SERVICE}/check/role`;
export const ENDPOINT_SERVICE_GET_FUTURE_USER = `${URL_SERVICE}/future-users`;
export const ENDPOINT_SERVICE_GET_ALL_USER = `${URL_SERVICE}/users`;
export const ENDPOINT_SERVICE_POST_FUTURE_USER = `${URL_SERVICE}/register`;
export const ENDPOINT_SERVICE_POST_VALID_FUTURE_USER = `${URL_SERVICE}/register/valid-user`;

export const urlsAcceptedWithoutConnection = [
  URL_API,
  URL_API_BACK,
  URL_API_UserLogin,
  URL_API_POST_FUTURE_USER,
];
