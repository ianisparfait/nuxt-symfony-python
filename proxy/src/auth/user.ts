import axios, { AxiosError, AxiosResponse } from "axios";

const User = async (accessToken: string): Promise<any> => {
  return await axios.get("http://nginx/api/user", {
    headers: {
      Authorization: accessToken,
    },
  }).then(
    (response: AxiosResponse): AxiosResponse => {
      return response.data;
    }
  ).catch((error: AxiosError): unknown => {
    return error.response.data;
  })
};

export default User;
export { User };
