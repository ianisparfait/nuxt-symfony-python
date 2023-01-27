import axios, { AxiosError, AxiosResponse } from "axios";
import { ENDPOINT_SERVICE_AdminInfo } from "../endpoints";

const Admin = async (accessToken: string): Promise<any> => {
  return new Promise((resolve) => {
    axios
      .get(ENDPOINT_SERVICE_AdminInfo, {
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
