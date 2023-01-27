import axios, { AxiosError, AxiosResponse } from "axios";
import { endPointServiceUserCheckRole } from "../endpoints";

const Roles = async (role: string, accessToken: string): Promise<any> => {
  return new Promise((resolve) => {
    axios
      .post(endPointServiceUserCheckRole, {role}, {
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
        console.log(error);
      });
  });
};

export default Roles;
export { Roles };
