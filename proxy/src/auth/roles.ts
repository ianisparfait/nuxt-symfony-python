import axios, { AxiosError, AxiosResponse } from "axios";

const Roles = async (role: string, accessToken: string): Promise<any> => {
  return await axios.post(
    "http://nginx/api/check/role",
    { role },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken,
      },
    }
  ).then((response: AxiosResponse): AxiosResponse => {
    return response.data;
  }).catch((error: AxiosError): unknown => {
    return error.response.data;
  });
};

export default Roles;
export { Roles };
