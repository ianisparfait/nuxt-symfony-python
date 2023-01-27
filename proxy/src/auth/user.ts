import axios, { AxiosError, AxiosResponse } from "axios";
import { endPointServiceUserInfo } from "../endpoints";

const User = async (accessToken: string): Promise<any> => {
  return new Promise((resolve) => {
    axios
      .get(endPointServiceUserInfo, {
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
