/** Server URL */
export const urlApi = "/api";
export const urlApiUser = `${urlApi}/.back`;
export const urlApiUserLogin = `${urlApiUser}/login`;
export const urlApiUserInfo = `${urlApiUser}/user`;
export const urlApiAdminInfo = `${urlApiUser}/admin`;
export const urlApiCheckRole = `${urlApiUser}/checkRole`;

/** Service Back */
export const urlServerServiceUser = "http://nginx/api";
export const endPointServiceUserHello = `${urlServerServiceUser}/hello`;
export const endPointServiceUserLogin = `${urlServerServiceUser}/login`;
export const endPointServiceUserInfo = `${urlServerServiceUser}/user`;
export const endPointServiceUserAdminInfo = `${urlServerServiceUser}/admin`;
export const endPointServiceUserCheckRole = `${endPointServiceUserInfo}/check/role`;

export const urlsAcceptedWithoutConnection = [
  urlApi,
  urlApiUser,
  urlApiUserLogin,
];
