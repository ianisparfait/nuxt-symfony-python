import { Express } from "express";
import axios, { AxiosError, AxiosResponse } from "axios";
import {
  Auth,
  User,
  Roles,
  Admin,
} from "./../auth";

import {
  ENDPOINT_SERVICE_AdminInfo,
  ENDPOINT_SERVICE_HELLO,
  ENDPOINT_SERVICE_Login,
  URL_API_AdminInfo,
  URL_API_CheckRole,
  URL_API_BACK,
  URL_API_UserInfo,
  URL_API_UserLogin,
} from "./../endpoints";

const Endpoints = (app: Express): void => {
  /* GET */
  // Test api with an HELLO response
  app.get(URL_API_BACK, (_: any, res: { send: (arg0: any) => void; }): void => {
    axios.get(ENDPOINT_SERVICE_HELLO)
      .then((onfulfilled: AxiosResponse): void => res.send(onfulfilled.data));
  });

  // Get all user's info retrieve by his token (mail & roles)
  app.get(URL_API_UserInfo, (req: { header: (arg0: string) => any; }, res: { send: (arg0: AxiosResponse<any, any>) => void; }): void => {
    const token = req.header("Authorization");
    User(token)
      .then((onfulfilled: AxiosResponse): void => res.send(onfulfilled));
  });

  // Allow or not the admin user
  app.get(URL_API_AdminInfo, (req, res) => {
    axios
      .get(ENDPOINT_SERVICE_AdminInfo, {
        headers: {
          Authorization: req.header("Authorization"),
        },
      })
      .then((onfulfilled) => res.send(onfulfilled.data))
      .catch((onErrored) => res.send(onErrored.response.data));
  });

  // Check if role is equal than the body post => Exemple: ( {"roles": "ROLE_USER"} ).
  // Return true or false.
  app.post(URL_API_CheckRole, (req: { body: { role: string; }; header: (arg0: string) => any; }, res: { send: (arg0: AxiosResponse<any, any>) => void; }): void => {
    const body: { role: string } = req.body;
    const token = req.header("Authorization");

    Roles(body.role, token)
      .then((onfulfilled: AxiosResponse): void => {
        res.send(onfulfilled);
      });
  });

  /* POST */
  // Logged in the user.
  app.post(URL_API_UserLogin, (_, res) => {
    axios.post(ENDPOINT_SERVICE_Login, {email: _.body.email, password: _.body.password})
    .then((onfulfilled) => {
      res.send(onfulfilled.data);
    })
    .catch((onrejected) => {
      console.log(onrejected.response.data)
      res.send(onrejected.response.data);
    });
  });

  /* DELETE */
  /* PUT */
};

export default { Endpoints };
export { Endpoints };
