import axios, { AxiosError, AxiosResponse } from "axios";
import { endPointServiceUserLogin } from "../endpoints";

const Auth = async (email: string, password: string): Promise<any> => {
  return new Promise((resolve) => {
    axios
      .post(endPointServiceUserLogin,{ email, password },
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
