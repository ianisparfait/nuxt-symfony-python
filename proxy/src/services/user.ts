import { Express } from "express";
import axios, { AxiosError, AxiosResponse } from "axios";
import {
  Auth,
  User,
  Roles,
  Admin,
} from "./../auth";

import {
  endPointServiceUserAdminInfo,
  endPointServiceUserHello,
  endPointServiceUserLogin,
  urlApiAdminInfo,
  urlApiCheckRole,
  urlApiUser,
  urlApiUserInfo,
  urlApiUserLogin,
} from "./../endpoints";

const Endpoints = (app: Express): void => {
  app.get(urlApiUser, (_: any, res: { send: (arg0: any) => void; }): void => {
    axios.get(endPointServiceUserHello)
      .then((onfulfilled: AxiosResponse): void => res.send(onfulfilled.data));
  });

  // app.post(urlApiUserLogin, (req, res): void => {
  //   const body: { email: string; password: string } = req.body;
  //   Auth(body.email, body.password)
  //   .then((data) => {
  //     res.send(data);
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //   })
  // });

  app.post(urlApiUserLogin, (_, res) => {
    axios.post(endPointServiceUserLogin, {email: _.body.email, password: _.body.password})
    .then((onfulfilled) => {
      res.send(onfulfilled.data);
    })
    .catch((onrejected) => {
      console.log(onrejected.response.data)
      res.send(onrejected.response.data);
    });
  });

  app.get(urlApiUserInfo, (req: { header: (arg0: string) => any; }, res: { send: (arg0: AxiosResponse<any, any>) => void; }): void => {
    const token = req.header("Authorization");
    User(token)
      .then((onfulfilled: AxiosResponse): void => res.send(onfulfilled));
  });

  // app.get(urlApiAdminInfo, (req: { header: (arg0: string) => any; }, res: { send: (arg0: any) => void; }): void => {
  //   const token = req.header("Authorization");
  //   Admin(token)
  //     .then((onfulfilled: AxiosResponse): void => res.send(onfulfilled))
  //     .catch((onErrored: AxiosError): void => res.send(onErrored));
  // });

  app.get(urlApiAdminInfo, (req, res) => {
    axios
      .get(endPointServiceUserAdminInfo, {
        headers: {
          Authorization: req.header("Authorization"),
        },
      })
      .then((onfulfilled) => res.send(onfulfilled.data))
      .catch((onErrored) => res.send(onErrored.response.data));
  });

  app.post(urlApiCheckRole, (req: { body: { role: string; }; header: (arg0: string) => any; }, res: { send: (arg0: AxiosResponse<any, any>) => void; }): void => {
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
