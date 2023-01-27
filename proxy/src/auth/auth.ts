import axios, { AxiosError, AxiosResponse } from "axios";
import { ENDPOINT_SERVICE_Login } from "../endpoints";

const Auth = async (email: string, password: string): Promise<any> => {
  return new Promise((resolve) => {
    axios
      .post(ENDPOINT_SERVICE_Login,{ email, password },
        {headers: {"Content-Type": "application/json"}}
      )
      .then((response: AxiosResponse) => {
        resolve(response.data);
      })
      .catch((error: AxiosError) => {
        console.error(error);
      });
  });
};

export default Auth;
export type {
  Auth
};
