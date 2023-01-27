import axios, { AxiosError, AxiosResponse } from "axios";
import { ENDPOINT_SERVICE_USER_CheckRole } from "../endpoints";

const Roles = async (role: string, accessToken: string): Promise<any> => {
  return new Promise((resolve) => {
    axios
      .post(ENDPOINT_SERVICE_USER_CheckRole, {role}, {
          headers: {
            "Content-Type": "application/json",
            Authorization: accessToken,
          },
        }
      )
      .then((response: AxiosResponse) => {
        resolve(response.data);
      })
      .catch((error: AxiosError) => {
        console.error(error);
      });
  });
};

export default Roles;
export { Roles };
