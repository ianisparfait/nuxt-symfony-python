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

/* Service Car (Flask) */
export const URL_FLASK_SERVICE = `${URL_API}/flask`;
export const URL_FLASK_GET_ALL = `${URL_FLASK_SERVICE}/cars`;
export const URL_FLASK_GET_ONE = `${URL_FLASK_SERVICE}/cars/:id`;
export const URL_FLASK_DELETE_ONE = `${URL_FLASK_SERVICE}/cars/:id`;
export const URL_FLASK_CREATE_ONE = `${URL_FLASK_SERVICE}/cars`;
export const URL_FLASK_UPDATE_ONE = `${URL_FLASK_SERVICE}/cars/:id`;

/** Service Back */
export const URL_SERVICE = "http://nginx/api";
export const URL_SERVICE_FLASK = "http://nginx/flask";
export const ENDPOINT_SERVICE_HELLO = `${URL_SERVICE}/hello`;
export const ENDPOINT_SERVICE_Login = `${URL_SERVICE}/login`;
export const ENDPOINT_SERVICE_UserInfo = `${URL_SERVICE}/user`;
export const ENDPOINT_SERVICE_AdminInfo = `${URL_SERVICE}/admin`;
export const ENDPOINT_SERVICE_USER_CheckRole = `${URL_SERVICE}/check/role`;
export const ENDPOINT_SERVICE_GET_FUTURE_USER = `${URL_SERVICE}/future-users`;
export const ENDPOINT_SERVICE_GET_ALL_USER = `${URL_SERVICE}/users`;
export const ENDPOINT_SERVICE_POST_FUTURE_USER = `${URL_SERVICE}/register`;
export const ENDPOINT_SERVICE_POST_VALID_FUTURE_USER = `${URL_SERVICE}/register/valid-user`;

export const ENDPOINT_SERVICE_GET_ALL_CARS = `${URL_SERVICE_FLASK}/cars`;
export const ENDPOINT_SERVICE_GET_ONE_CAR = `${URL_SERVICE_FLASK}/cars`;
export const ENDPOINT_SERVICE_DELETE_ONE_CAR = `${URL_SERVICE_FLASK}/cars`;
export const ENDPOINT_SERVICE_CREATE_ONE_CAR = `${URL_SERVICE_FLASK}/cars`;
export const ENDPOINT_SERVICE_UPDATE_ONE_CAR = `${URL_SERVICE_FLASK}/cars`;

export const urlsAcceptedWithoutConnection = [
  URL_API,
  URL_API_BACK,
  URL_API_UserLogin,
  URL_API_POST_FUTURE_USER,
];
