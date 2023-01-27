import axios, { AxiosError, AxiosResponse } from "axios";
import { ENDPOINT_SERVICE_UserInfo } from "../endpoints";

const User = async (accessToken: string): Promise<any> => {
  return new Promise((resolve) => {
    axios
      .get(ENDPOINT_SERVICE_UserInfo, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response: AxiosResponse) => {
        resolve(response.data)
      })
      .catch((error: AxiosError) => {
        console.error(error);
      })
  });
};

export default User;
export { User };
