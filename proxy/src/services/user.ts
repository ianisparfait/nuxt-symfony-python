import { Express } from "express";
import axios, { AxiosResponse } from "axios";
import {
  Auth,
  User,
  Roles,
} from "./../auth";

const API_USER = "/api/.user";
const API_LOGIN = "/api/.user/login";
const API_USER_INFO = "/api/.user/user";
const API_ADMIN = "/api/.user/admin";
const API_ROLES = "/api/.user/check/roles";

const Endpoints = (app: Express): void => {
  app.get(API_USER, (_: any, res: { send: (arg0: any) => void; }): void => {
    axios.get("http://nginx/api/hello")
      .then((onfulfilled: AxiosResponse): void => res.send(onfulfilled.data));
  });

  app.post(API_LOGIN, (req, res) => {
    const body: { username: string; password: string } = req.body;
    Auth(body.username, body.password).then((data) => {
      res.send(data);
    });
  });

  app.get(API_USER_INFO, (req: { header: (arg0: string) => any; }, res: { send: (arg0: AxiosResponse<any, any>) => void; }): void => {
    const token = req.header("Authorization");
    User(token)
      .then((onfulfilled: AxiosResponse): void => res.send(onfulfilled));
  });

  app.get(API_ADMIN, (req: { header: (arg0: string) => any; }, res: { send: (arg0: any) => void; }): void => {
    axios
      .get("http://nginx/api/admin", {
        headers: {
          Authorization: req.header("Authorization"),
        },
      })
      .then((onfulfilled: AxiosResponse): void => res.send(onfulfilled.data));
  });

  app.post(API_ROLES, (req: { body: { role: string; }; header: (arg0: string) => any; }, res: { send: (arg0: AxiosResponse<any, any>) => void; }): void => {
    const body: { role: string } = req.body;
    const token = req.header("Authorization");

    Roles(body.role, token)
      .then((onfulfilled: AxiosResponse): void => {
        res.send(onfulfilled);
      });
  });
};

export default { Endpoints };
export { Endpoints };
