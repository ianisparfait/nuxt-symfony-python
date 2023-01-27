import axios, { AxiosError, AxiosResponse } from "axios";
import { endPointServiceUserAdminInfo } from "../endpoints";

const Admin = async (accessToken: string): Promise<any> => {
  return new Promise((resolve) => {
    axios
      .get(endPointServiceUserAdminInfo, {
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

export default Admin;
export { Admin };
